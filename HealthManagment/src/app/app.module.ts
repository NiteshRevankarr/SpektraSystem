import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LabtestComponent } from './labtest/labtest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BeautyComponent } from './beauty/beauty.component';
import { WellnessComponent } from './wellness/wellness.component';
import { OfferComponent } from './offer/offer.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { MedicineComponent } from './medicine/medicine.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AdminMedicineComponent } from './admin-medicine/admin-medicine.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LabtestComponent,
    BeautyComponent,
    WellnessComponent,
    OfferComponent,
    ProductsComponent,
    CartComponent,
    MedicineComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    OrderdetailsComponent,
    AdminMedicineComponent,
    AdminCustomerComponent,
    AdminCategoryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
    

    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
