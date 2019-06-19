import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  private returnRoute: string;
  public loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public get controllers(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this._fb.group({
      'username': ['', [Validators.required, Validators.minLength(8)]],
      'password': ['', [Validators.required, Validators.minLength(8)]]
    });

    this.returnRoute = this.route.snapshot.queryParams.returnUrl || '/';
    if (this.auth.getCurrentUser()) {
      this.router.navigateByUrl('/');
    }
  }

  getUsernameError() {
    if (this.controllers.username.invalid) {
      return (this.controllers.username.hasError('required')) ? "Field is required" :
        (this.controllers.username.hasError('minlength')) ? "Must be greater than 8 characters" : '';
    }
    return '';
  }

  getPasswordErrors() {
    if (this.controllers.password.invalid) {
      return (this.controllers.password.hasError('required')) ? 'Field is requied' :
        (this.controllers.password.hasError('minlength')) ? "Must be greater than 8 characeters" : '';
    }
    return ''
  }

  onSubmit() {
    let user: User = new User(this.loginForm.value);
    this.auth.login(user).pipe(first()).subscribe(
      data => {
        this.router.navigateByUrl(this.returnRoute);
      },
      errro => {
        console.log("Failed to loggin");
      }
    )
  }

}
