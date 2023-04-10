import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducttableComponent } from './producttable/producttable.component';

const routes: Routes = [
  {path:'producttable',component:ProducttableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
