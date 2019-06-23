import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatRippleModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule,
  MatCheckboxModule
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRippleModule
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
