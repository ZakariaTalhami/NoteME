import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { StatesModule } from './states/states.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './common/http-interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    StatesModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
