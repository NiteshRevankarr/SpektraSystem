import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
import { Medicine } from './adminmedicine/Medicine';



@Injectable({
  providedIn: 'root'
})



export class MedicineService {

  
  
  private baseUrl = 'https://localhost:7203/api/GetAllMedicine'

  constructor(private http: HttpClient) { }

  getMedicines(): Observable<Medicine[]> {

    return this.http.get<Medicine[]>(`${this.baseUrl}`);

  }

  addMedicine(medicine: Medicine): Observable<Medicine> {

    return this.http.post<Medicine>(`${this.baseUrl}`, medicine);

  }

  updateMedicine(medicine: Medicine): Observable<Medicine> {

    return this.http.put<Medicine>(`${this.baseUrl}${medicine.medicineID}`, medicine);

  }

  deleteMedicine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);

  }

  


}