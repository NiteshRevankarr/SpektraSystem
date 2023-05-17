import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CalculationComponent } from './calculation/calculation.component';
const routes: Routes = [
  {path:'', redirectTo:"login", pathMatch:"full"},
  
  {path:'calculation',component:CalculationComponent},
  {path:'login',component:LoginComponent}
 
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
