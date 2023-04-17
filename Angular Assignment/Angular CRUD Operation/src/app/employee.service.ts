import { Injectable } from '@angular/core';
import { Employee } from './add/employee';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/posts';
  router: any;

  constructor(private http: HttpClient) { }


  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }


  updateEmployee(employeeId: number, updatedEmployee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${employeeId}`, updatedEmployee);
  }


  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }



}