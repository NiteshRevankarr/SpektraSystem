import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerOrder } from './cart/CustomerOrder';

@Injectable({
  providedIn: 'root'
})


export class CustomerorderService {

  
  private apiUrl = 'https://localhost:7228/api';

  constructor(private http: HttpClient) { }
  
  sendCustomerOrder(customerOrder: any): Observable<any> {
    const endpoint = `${this.apiUrl}/Customer`; // Update the endpoint to match your API
    return this.http.post(endpoint, customerOrder);
  }
  
  getAllCustomerOrders(): Observable<CustomerOrder[]> {
    const endpoint = `${this.apiUrl}/CustomerOrders`; // Update the endpoint to match your API
    return this.http.get<CustomerOrder[]>(endpoint);
  }
  
}
