import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../common/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    PageNotFoundComponent
  ],
  exports: [
    LoginComponent,
    PageNotFoundComponent
  ]
})
export class StatesModule { }
