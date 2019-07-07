import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../common/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent,
    PageNotFoundComponent
  ]
})
export class StatesModule { }
