import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBaseRoutingModule } from './main-base-routing.module';
import { MainBaseComponent } from './main-base.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainBaseComponent,
    HomeComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainBaseRoutingModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    PricingComponent
  ]
})
export class MainBaseModule { }
