import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { AdminTeamComponent } from './admin-team/admin-team.component';

import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { AdminmedicineComponent } from './adminmedicine/adminmedicine.component';
import { CustomerorderComponent } from './customerorder/customerorder.component';
import { OfferComponent } from './offer/offer.component';
import { WellnessComponent } from './wellness/wellness.component';
import { BeautyComponent } from './beauty/beauty.component';
import { LabtestComponent } from './labtest/labtest.component';
import { CartComponent } from './cart/cart.component';
import { MedicineComponent } from './medicine/medicine.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'homee',component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'login',component:LoginComponent},
  {path:'category',component:CategoryComponent},
  {path:'adminteam',component:AdminTeamComponent},
  {path:'offer',component:OfferComponent},
  {path:'customer',component:CustomerComponent},
  {path:'home', component:HomeComponent},
  {path:'wellness',component:WellnessComponent},
  {path:'beauty',component:BeautyComponent},
  {path:'labtest',component:LabtestComponent},
  {path:'adminmedicine',component:AdminmedicineComponent},
  {path:'customerorder',component:CustomerorderComponent},
  {path:'cart',component:CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
