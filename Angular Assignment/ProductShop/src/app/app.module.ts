import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducttableComponent } from './producttable/producttable.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducttableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProducttableComponent]
})
export class AppModule { }
