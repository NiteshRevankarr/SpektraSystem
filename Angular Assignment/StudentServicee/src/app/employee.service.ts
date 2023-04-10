import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    { name: 'Nihal Revankar', id: 1, email: 'nihalrevankar@gmail.com' },
    { name: 'Adarsh Naik', id: 2, email: 'adarshnaik@gmail.com' },
    { name: 'Baba Johnson', id: 3, email: 'babajohnson@gmail.com' },
    { name: 'Adarsh Naik', id: 4, email: 'adarshnaik@gmail.com' },
    { name: 'Baba Johnson', id: 5, email: 'babajohnson@gmail.com' },
    { name: 'Adarsh Naik', id: 6, email: 'adarshnaik@gmail.com' },
    { name: 'Baba Johnson', id: 7, email: 'babajohnson@gmail.com' },

  ];

  constructor() { }

  getEmployees() {
    return this.employees;
  }

}