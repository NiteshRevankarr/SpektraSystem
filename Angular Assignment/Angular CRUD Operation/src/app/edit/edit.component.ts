import { Component, OnInit } from '@angular/core';
import { Employee } from '../add/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employeeForm: FormGroup;
  designations: string[] = ['Manager', 'Developer', 'Designer', 'Tester'];
  employee: Employee | undefined;
  editedData: any;
  companyForm: any;
  companyData: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      designation: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(0)]],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    var id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id).subscribe(employee => {
      this.employee = employee;
      this.employeeForm.patchValue({
        name: employee.name,
        email: employee.email,
        designation: employee.designation,
        salary: employee.salary,
        address: employee.address
      });
    });
  }

  onSubmit(): void {
    const updatedEmployee = this.employeeForm.value;
    this.employeeService.updateEmployee(this.employee!.id, updatedEmployee).subscribe(() => {
      if (confirm("Updated Successfully!.....") == true) {
        this.getHome();
      }
    });
  }

  getHome() {
    this.router.navigate(['view']);
  }
}