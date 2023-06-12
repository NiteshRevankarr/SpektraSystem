import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmincustomerService {

  constructor(private http: HttpClient) { }

  postCustomer(data: any) {
    return this.http.post<any>('http://localhost:3000/customer', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getCustomers() {
    return this.http.get<any>('http://localhost:3000/customer')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteCustomer(id: number) {
    return this.http.delete<any>('http://localhost:3000/customer/' +id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}


