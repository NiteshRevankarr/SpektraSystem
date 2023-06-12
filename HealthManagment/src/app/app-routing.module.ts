import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LabtestComponent } from './labtest/labtest.component';
import { BeautyComponent } from './beauty/beauty.component';
import { WellnessComponent } from './wellness/wellness.component';
import { OfferComponent } from './offer/offer.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { MedicineComponent } from './medicine/medicine.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminMedicineComponent } from './admin-medicine/admin-medicine.component';



const routes: Routes = [

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},

  
  { path: 'home', component: HomeComponent },
  {path:'labtest',component:LabtestComponent},
  {path:'wellness',component:WellnessComponent},
  {path:'offer',component:OfferComponent},
  {path:'products/:id',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'admincategory',component:AdminCategoryComponent},
  {path:'admincustomer',component:AdminCustomerComponent},
  {path:'adminmedicine',component:AdminMedicineComponent},

  {path:'beauty',component:BeautyComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
