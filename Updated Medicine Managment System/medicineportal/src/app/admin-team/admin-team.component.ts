
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../Admin';
import { FormGroup } from '@angular/forms';
import { Order } from '../customerorder/customerorder';
import { CustomerService } from '../customer.service';

import { LoginService } from '../login.service';
import { UserCountService } from '../user-count.service';




@Component({
  selector: 'app-admin-team',
  templateUrl: './admin-team.component.html',
  styleUrls: ['./admin-team.component.css']
})

export class AdminTeamComponent  implements OnInit {
  admins: any[] = [];
  Users: any[] = [];

 
  
formValue!: FormGroup;
orders: Order[] = [];
totalSales: number = 0;
totalOrders: number = 0;
status = false;
userCount!: number;

constructor(private customerService: CustomerService,private loginservice:LoginService,private userCountService: UserCountService,
  private adminService: AdminService) { }


 

  ngOnInit(): void {
  
    this.getAdmins();
    this.loadAdmins();
    this.fetchOrders();
    this.fetchTotalSales();
    this.fetchTotalOrders();
    this.userCountService.getUserCount().subscribe(count => {
     this.userCount = count;
   });
 }
  

  getAdmins(): void {
    this.adminService.getAdmins().subscribe((data: any[]) => {
      this.admins = data;
    });
  }

  getAdminStatus(status: string): string {
    return status === 'online' ? 'Online' : 'Offline';
  }
 
  loadAdmins(): void {
    this.adminService.getAdmins().subscribe((data: Admin[]) => {
      console.log('Admin data:', data); // Add this line to log the data
      this.admins = data;
    });
  }

 
  addToggle()
  {
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




  
















