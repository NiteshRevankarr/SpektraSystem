import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCrudService {


  
  constructor(private http : HttpClient) { }

  postMedicine(data : any){
    return this.http.post<any>("http://localhost:3000/medicine",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getMedicine(data : any){
    return this.http.get<any>("http://localhost:3000/medicine")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateMedicine(data : any,id:number){
    return this.http.put<any>("http://localhost:3000/medicine/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteMedicine(id:number) {
    return this.http.delete<any>("http://localhost:3000/medicine/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }



}

  

