import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalculationComponent } from './calculation/calculation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalComponent } from './cal/cal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculationComponent,
    CalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
