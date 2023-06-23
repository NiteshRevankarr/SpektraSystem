import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class UserCountService {

  private userCount = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.refreshUserCount();
  }

  getUserCount(): Observable<number> {
    return this.userCount.asObservable();
  }

  refreshUserCount(): void {
    this.http.get<number>('https://localhost:7228/api/Login/totalusers').subscribe(count => {
      this.userCount.next(count);
    });
  }

  
}