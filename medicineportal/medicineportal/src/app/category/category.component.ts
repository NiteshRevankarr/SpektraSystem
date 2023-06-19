import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Category } from './Category';
import { CategoryService } from '../category.service';
import { CustomerService } from '../customer.service';
import { LoginService } from '../login.service';
import { UserCountService } from '../user-count.service';
import { Order } from '../customerorder/customerorder';


declare var window:any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  title = 'Admin';
  formModel:any;

  status = false;
  addToggle() {
    this.status = !this.status;
  }

  categoryData: Category[] = [];
  formValue!: FormGroup;
  orders: Order[] = [];
  totalSales: number = 0;
  totalOrders: number = 0;
  userCount!: number;

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, private customerService: CustomerService, private loginservice:LoginService, private userCountService: UserCountService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      categoryName: ['', Validators.required]
    });
    this.getCategories();
    this.fetchOrders();
    this.fetchTotalSales();
    this.fetchTotalOrders();
    this.userCountService.getUserCount().subscribe(count => {
      this.userCount = count;
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(data => {
      this.categoryData = data;
    });
  }

  postCategoryDetails() {
    const category: Category = {
      categoryID: 0,
      categoryName: this.formValue.value.categoryName
    };
    this.categoryService.postCategoryDetails(category).subscribe(data => {
      this.getCategories();
      this.formValue.reset();
    });
  }

  deleteCategory(row: Category) {
    this.categoryService.deleteCategory(row.categoryID).subscribe(() => {
      this.getCategories();
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
