
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators';
import { Category } from './category/Category';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private baseUrl = 'https://localhost:7203/api/Category'
  constructor(private http: HttpClient) { }


  postCategoryDetails(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category);
  }

 

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, category);
  }

  deleteCategory(categoryID: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${categoryID}`).pipe(
      catchError((error) => {
        console.error('Error deleting category:', error);
        return throwError(error);
      })
    );
  }  








  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/${category.categoryID}`, category).pipe(
      catchError((error) => {
        console.error('Error updating category:', error);
        return throwError(error);
      })
    );
  }
  
}



