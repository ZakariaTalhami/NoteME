import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user/user.model';
import { ErrorStateMatcher } from '@angular/material';
import { first } from 'rxjs/operators';

class PasswordMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && control.parent.invalid;
  }
}

@Component({
  selector: 'nm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  private registerForm: FormGroup;
  public matcher: PasswordMatcher = new PasswordMatcher();
  public resErrorMessage: string = "Where is the pizza";

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) { }

  public get controllers(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  public get passwordControllers(): { [key: string]: AbstractControl } {
    return (<FormGroup>this.controllers.passwords).controls
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'username': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      passwords: this.fb.group({
        'password': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
        'confirmPassword': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]]
      }, { validators: this.passwordConfirming }),
      'acceptTerms': ['', Validators.requiredTrue]
    });

    if (this.auth.getCurrentUser()) {
      this.router.navigateByUrl('/');
    }
  }

  getUsernameError(): string {
    return this.getErrorMessage(this.controllers.username);
  }

  getPasswordErrors(): string {
    return this.getErrorMessage(this.passwordControllers.password);
  }
  getConfirmPasswordErrors(): string {
    return this.getErrorMessage(this.passwordControllers.confirmPassword, this.registerForm.controls.passwords);
  }

  getErrorMessage(controller: AbstractControl, form?: AbstractControl): string {
    let errors = controller.errors || {};
    if (form) {
      Object.assign(errors, form.errors);
    }
    if (errors) {
      switch (Object.keys(errors)[0]) {
        case 'required':
          return "Field is requied";
          break;
        case 'minlength':
          return 'Must be greater than 8 characeters';
          break;
        case 'maxlength':
          return 'Must be less than 32 characeters';
          break;
        case 'passwordMismatch':
          return 'Passwords do not match';
          break;
        default:
          return '';
          break;
      }
    }
  }

  passwordConfirming(controller: AbstractControl) {
    let match = controller.get('password').value == controller.get('confirmPassword').value;
    return (!match) ? {passwordMismatch: true} : null;
  }

  onSubmit(): void {
    let user: User = new User({
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    })
    console.log(user);
    this.userService.register(user)
      .pipe(first()).subscribe(
        data => {

          this.router.navigateByUrl('/login');
        },
        error => {
          this.resErrorMessage = error.message
        }
      )
  }

}
