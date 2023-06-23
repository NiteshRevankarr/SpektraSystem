import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  constructor(private http:HttpClient)  { }
  rUser(ruser:Array<String>):Observable<any>{
  return this.http.post("https://localhost:7228/api/Login"+ '/ruser' ,{
      Name :ruser[0],
      email : ruser[1],
      password: ruser[2],
      cpassword : ruser[3]
    }, {responseType: 'text'});
  }

  
  userID: number =0;
  getUserID(): number | null {
    return this.userID;
  }
  

  Get(loginInfo:Array<String>):Observable<any>{
    return this.http.post("https://localhost:7228/api/Login/user " , {
      email : loginInfo[0],
      password : loginInfo[1]
    }, {responseType: 'text'}).pipe(
      tap((response: any) => {
        console.log(response)
      this.userID=response;
        console.log(this.userID);
        
      })
    );
  }

  // Get(loginInfo:Array<String>):Observable<any>{
  //   return this.http.post("https://localhost:7228/api/Login/user " , {
  //     email : loginInfo[0],
  //     password : loginInfo[1]
  //   }, {responseType: 'text'});
  // }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>('https://localhost:7228/api/Admin');
  }


  getAdminByEmail(email: string): Observable<Admin> {
    return this.http.get<Admin>(`https://localhost:7228/api/Admin/email/${email}`);
  }

  updateAdminStatus(adminId: number, status: string): Observable<any> {
    return this.http.put(`https://localhost:7228/api/Admin/${adminId}`, { status }, { responseType: 'text' });
  }

  getUserCount(): Observable<number> {
    return this.http.get<number>('https://localhost:7228/api/Login/count');
}


getCustomerUsers():Observable<any> {
  return this.http.get<any>("https://localhost:7228/api/login/users");
}

}


