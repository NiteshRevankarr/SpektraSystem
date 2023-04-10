import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  

  people: any[]=[
   
    {"name":"Pankaj", "empid":"1" ,  "emailid":"Pankay33@gmail.com","gender":"Male" },
    {"name":"Akshay", "empid":"2",  "emailid":"Akshay22233@gmail.com","gender":"Male"},
    {"name":"Gaurav", "empid":"3",  "emailid":"Gaurav222@gmail.com","gender":"Male" },
    {"name":"Sahil", "empid":"4", "emailid":"Sahilnaik22@gmail.com","gender":"Male"},
  ]





  public dropDownValue = "";
      SetDropDownValue(drpValue : any) {
        this.dropDownValue = drpValue.target.value;
    }







  
  
}