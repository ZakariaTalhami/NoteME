import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatRippleModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRippleModule
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
