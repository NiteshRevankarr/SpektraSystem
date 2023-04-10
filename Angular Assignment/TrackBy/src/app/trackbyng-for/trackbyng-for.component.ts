import { Component } from '@angular/core';

@Component({
  selector: 'app-trackbyng-for',
  templateUrl: './trackbyng-for.component.html',
  styleUrls: ['./trackbyng-for.component.css']
})
export class TrackbyngForComponent {

 
  employees = ['Pankay', 'Akshay', 'Gaurav', 'Sahil'];

  employeesList = [
    { "name": "Pankaj", "empid": "1", "emailid": "Pankay33@gmail.com", "gender": "Male" },
    { "name": "Akshay", "empid": "2", "emailid": "Akshay22233@gmail.com", "gender": "Male" },
    { "name": "Gaurav", "empid": "3", "emailid": "Gaurav222@gmail.com", "gender": "Male" },
    { "name": "Sahil", "empid": "4", "emailid": "Sahilnaik22@gmail.com", "gender": "Male" },
  ];

  refresh(): void {
    this.employeesList = [
      { "name": "Pankaj", "empid": "1", "emailid": "Pankay33@gmail.com", "gender": "Male" },
      { "name": "Akshay", "empid": "2", "emailid": "Akshay22233@gmail.com", "gender": "Male" },
      { "name": "Gaurav", "empid": "3", "emailid": "Gaurav222@gmail.com", "gender": "Male" },
      { "name": "Sahil", "empid": "4", "emailid": "Sahilnaik22@gmail.com", "gender": "Male" },
      { "name": "Manoj", "empid": "5", "emailid": "Manojnaik22@gmail.com", "gender": "Male" },
    ];
  }

  refreshEmployees(index: number, employee: any): string {
    return employee.name;
  }

}

