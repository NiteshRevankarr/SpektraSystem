import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { CustomerService } from '../customer.service';
import { LoginService } from '../login.service';
import { UserCountService } from '../user-count.service';
import { Order } from './customerorder';

@Component({
  selector: 'app-customerorder',
  templateUrl: './customerorder.component.html',
  styleUrls: ['./customerorder.component.css']
})
export class CustomerorderComponent implements OnInit {
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
  
  addToggle(): void {
    this.status = !this.status;
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


  
















