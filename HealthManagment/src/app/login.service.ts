import { Injectable } from '@angular/core'

import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  rUser(ruser:Array<String>){
  return this.http.post("https://localhost:7054/api/login"+ '/ruser' ,{
      Name :ruser[0],
      email : ruser[1],
      password: ruser[2],
      cpassword : ruser[3]
    }, {responseType: 'text'});
  }

  Get(loginInfo:Array<String>){
    return this.http.post("https://localhost:7054/api/login/user" , {
      email : loginInfo[0],
      password : loginInfo[1]
    }, {responseType: 'text'});
  }



}
