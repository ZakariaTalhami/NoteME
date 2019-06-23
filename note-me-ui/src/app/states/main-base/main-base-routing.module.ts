import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { MainBaseComponent } from './main-base.component';

const routes: Routes = [
  {
    path: '',
    component: MainBaseComponent,  
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent
      }, 
      {
        path: 'pricing',
        component: PricingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes,)],
  exports: [RouterModule]
})
export class MainBaseRoutingModule { }
