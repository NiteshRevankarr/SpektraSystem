import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../add/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  implements OnInit {

  employees: Employee[] | undefined;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  editEmployee(employee: Employee): void {
    this.router.navigate([`/edit/${employee.id}`]);

  }

  deleteEmployee(employee: Employee): void {
    if (confirm(`Are you sure you want to delete this ID ${employee.id}?`)) {
      this.employeeService.deleteEmployee(employee.id)
        .subscribe(() => this.getEmployees());
    }
  }

}