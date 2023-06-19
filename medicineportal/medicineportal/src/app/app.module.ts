import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { AdminTeamComponent } from './admin-team/admin-team.component';

import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { AdminmedicineComponent } from './adminmedicine/adminmedicine.component';
import { CustomerorderComponent } from './customerorder/customerorder.component';
import { OfferComponent } from './offer/offer.component';
import { BeautyComponent } from './beauty/beauty.component';
import { WellnessComponent } from './wellness/wellness.component';
import { LabtestComponent } from './labtest/labtest.component';
import { CartComponent } from './cart/cart.component';
import { MedicineComponent } from './medicine/medicine.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    CategoryComponent,
    AdminTeamComponent,
    
    CustomerComponent,
    HomeComponent,
    AdminmedicineComponent,
    CustomerorderComponent,
    OfferComponent,
    BeautyComponent,
    WellnessComponent,
    LabtestComponent,
    CartComponent,
    MedicineComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
