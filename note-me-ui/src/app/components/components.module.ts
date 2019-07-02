import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../common/material/material.module';
import { RouterModule } from '@angular/router';
import { PriceCardComponent } from './price-card/price-card.component';
import { TwitterCardComponent } from './twitter-card/twitter-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PriceCardComponent,
    TwitterCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
