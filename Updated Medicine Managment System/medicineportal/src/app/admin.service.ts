

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  private apiUrl = ' https://localhost:7228/api/Admin';

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  setAllAdminsOffline(): Observable<any> {
    // Updated the URL with the actual API endpoint to set all admins to offline
    const apiUrl = 'https://localhost:7228/api/Admin/setAllAdminsOffline';
    return this.http.post(apiUrl, {});
  }

  updateAdminStatus(adminID: number, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${adminID}`, { status });
  }
}




