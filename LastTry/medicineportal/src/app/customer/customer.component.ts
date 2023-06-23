import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../Admin';
import { FormGroup } from '@angular/forms';
import { Order } from '../customerorder/customerorder';
import { CustomerService } from '../customer.service';
import { LoginService } from '../login.service';
import { UserCountService } from '../user-count.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  admins: any[] = [];
  Users: any[] = [];

  Name: String='';
  email: String='';
  Password: String='';
  
formValue!: FormGroup;
orders: Order[] = [];
totalSales: number = 0;
totalOrders: number = 0;
status = false;
userCount!: number;

  constructor(private customerService: CustomerService,private loginservice:LoginService,private userCountService: UserCountService) { }

  
  ngOnInit(): void {
    this.rUser();
    this.Get();
    this.getCustomerUsers();
    
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


  getCustomerUsers(): void {
    this.loginservice.getCustomerUsers().subscribe((data:any[]) => {
      this.Users = data;
    });
  }

  
  rUser(): void {
    this.loginservice.rUser([this.Name,this.email,this.Password]).subscribe((data: any[]) => {
      this.Users = data;
    });
  }

  Get(): void {
    this.loginservice.Get([this.email,this.Password]).subscribe((data: any[]) => {
      console.log('user data:', data); // Add this line to log the data
      this.Users = data;
    });
  }
  
}


  

















  