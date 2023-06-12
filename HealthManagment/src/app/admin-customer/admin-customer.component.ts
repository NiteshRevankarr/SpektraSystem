import { Component, OnInit } from '@angular/core';
import { CustomerModel } from './AdminCustomer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdmincustomerService } from '../admincustomer.service';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {
  formValue!: FormGroup;
  customerModelObj: CustomerModel = new CustomerModel();
  customerData: any;
  row: any;

  constructor(private formBuilder: FormBuilder, private api: AdmincustomerService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fullName: [''],
      email: [''],
      phone: [''],
      address: [''],
      city: [''],
      state: [''],
      zipCode: ['']
    });
    this.getAllCustomers();
  }

  postCustomerDetails() {
    this.customerModelObj.FullName = this.formValue.value.fullName;
    this.customerModelObj.Email = this.formValue.value.email;
    this.customerModelObj.Phone = this.formValue.value.phone;
    this.customerModelObj.Address = this.formValue.value.address;
    this.customerModelObj.City = this.formValue.value.city;
    this.customerModelObj.State = this.formValue.value.state;
    this.customerModelObj.ZipCode = this.formValue.value.zipCode;

    this.api.postCustomer(this.customerModelObj).subscribe(res => {
      console.log(res);
      alert('Customer Added Successfully');
      let ref = document.getElementById('cancle');
      ref?.click();
      this.formValue.reset();
      this.getAllCustomers();
    });
  }

  getAllCustomers() {
    this.api.getCustomers().subscribe(res => {
      this.customerData = res;
    });
  }

  deleteCustomer(row: any) {
    this.api.deleteCustomer(row.id).subscribe(res => {
      alert('Customer deleted!!!');
      this.getAllCustomers();
    });
  }
}



