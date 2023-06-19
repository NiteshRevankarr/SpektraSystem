import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './customerorder/customerorder';
export interface OrdersResponse {
  orders: Order[];
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private apiUrl = 'https://localhost:7203/api/Customer';

  constructor(private http: HttpClient) { }


  
 
  getTotalSales(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/totalsales`);
}

getTotalOrders(): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/totalorders`);
}


getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }
  
}



  