import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employee: any[] | undefined;

  constructor(private employeeService: EmployeeService) {} // extends 

  displayEmployees() {
    this.employee = this.employeeService.getEmployees();
  }
}
