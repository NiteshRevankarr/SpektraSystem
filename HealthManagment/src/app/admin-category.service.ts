import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {

  
  private categoryDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http : HttpClient) { }

  setCategoryData(data: any[]) {
    this.categoryDataSubject.next(data);
  }

  getCategoryData() {
    return this.categoryDataSubject.asObservable();
  }

  postCategory(data : any){
    return this.http.post<any>("http://localhost:3000/category",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getCategory(data : any){
    return this.http.get<any>("http://localhost:3000/category")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateCategory(data : any,id:number){
    return this.http.put<any>("http://localhost:3000/category/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCategory(id:number) {
    return this.http.delete<any>("http://localhost:3000/category/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}


