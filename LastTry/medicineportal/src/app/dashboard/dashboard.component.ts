import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { LoginService } from '../login.service';
import { UserCountService } from '../user-count.service';
import { Order } from '../customerorder/customerorder';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  formValue!: FormGroup;
  orders: Order[] = [];
  totalSales: number = 0;
  totalOrders: number = 0;
  status = false;
  
  userCount!: number;

  constructor(private customerService: CustomerService,private loginservice:LoginService,private userCountService: UserCountService) { }



  ngOnInit(): void {
    this.fetchOrders();
     this.fetchTotalSales();
     this.fetchTotalOrders();
     this.userCountService.getUserCount().subscribe(count => {
      this.userCount = count;
    });
  }
     
   addToggle(): void {
    this.status = !this.status;
  }
   
  fetchOrders(): void {
     this.customerService.getOrders().subscribe(
       (data: Order[]) => {
         this.orders = data;
       },
       (error) => {
         console.error('Error fetching orders:', error);
       }
     );
   }
   
   
   fetchTotalSales(): void {
     this.customerService.getTotalSales().subscribe(
       (data: number) => {
         this.totalSales = data;
       },
       (error) => {
         console.error('Error fetching total sales:', error);
       }
     );
   }
 
   fetchTotalOrders(): void {
     this.customerService.getTotalOrders().subscribe(
       (data: number) => {
         this.totalOrders = data;
       },
       (error) => {
         console.error('Error fetching total orders:', error);
       }
     );
   }
 
 
 
 }
 
 
   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 























