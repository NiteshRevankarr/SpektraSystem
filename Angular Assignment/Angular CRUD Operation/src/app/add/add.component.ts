import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

var designation = ['HR', 'Manager', 'Developer', 'Designer', 'Tester'];

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {

  employeeForm: FormGroup = this.fb.group({
    name: ['', Validators.required], 
    email: ['', [Validators.required, Validators.email]],
    designation: ['', Validators.required],
    salary: [0, [Validators.required, Validators.min(0)]],
    address: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder, private http: HttpClient,private router: Router,) {}

  onSubmit(): void {
    var { name, email, designation, salary, address } = this.employeeForm.value;
    var employee: Employee = { name, email, designation, salary, address, id: 0,};
    this.http.post('http://localhost:3000/posts', employee).subscribe(() => {
      this.router.navigate(['/view']);
    });
  }

  get designations(): string[] {
    return designation;
  }
}