import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { Medicine } from './adminmedicine/Medicine';

@Injectable({
  providedIn: 'root'
})
export class CartService {
//   private cartItems: Medicine[] = [];
//   private medicines: Medicine[] = [];

//   private cartUpdatedSource = new BehaviorSubject<void | null>(null);
//   cartUpdated$ = this.cartUpdatedSource.asObservable();

//   private updateCart(): void {
//     this.cartUpdatedSource.next();
//     this.saveCart();
//   }

//   constructor() {
//     const storedCart = localStorage.getItem('cartItems');
//     if (storedCart) {
//       this.cartItems = JSON.parse(storedCart);
//     }
//   }

//   private saveCart(): void {
//     localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
//   }

//   setMedicines(medicines: Medicine[]): void {
//     this.medicines = medicines;
//   }

//   getMedicines(): Medicine[] {
//     return this.medicines;
//   }
//   addToCart(medicine: Medicine): void {
//     const existingMedicine = this.cartItems.find(item => item.id === medicine.id);
//     if (existingMedicine) {
//       existingMedicine.quantity += medicine.quantity;
//     } else {
//       this.cartItems.push({ ...medicine });
//       this.updateCart();
//       this.saveCart();
//       this.cartUpdatedSource.next();
//     }
//   }

//   updateQuantity(medicineId: number, newQuantity: number): void {
//     const medicine = this.cartItems.find(item => item.id === medicineId);
//     if (medicine) {
//       medicine.quantity = newQuantity;
//       this.updateCart();
//       this.saveCart();
//       this.cartUpdatedSource.next();
//     }
//   }

//   removeItem(medicineId: number): void {
//     this.cartItems = this.cartItems.filter(item => item.id !== medicineId);
//     this.updateCart();
//     this.saveCart();
//     this.cartUpdatedSource.next();
//   }

//   getCartItems(): Medicine[] {
//     return this.cartItems;
//   }

//   getTotalItems(): number {
//     return this.cartItems.reduce((total, item) => total + item.quantity, 0);
//   }

//   getMedicineById(id: number): Observable<Medicine | undefined> {
//     const medicine = this.medicines.find((item: Medicine) => item.id === id);
//     return of(medicine);
//   }
  
  

// }


private cartItems: Medicine[] = [];
  private medicines: Medicine[] = [];

  private cartUpdatedSource = new BehaviorSubject<void | null>(null);
  cartUpdated$ = this.cartUpdatedSource.asObservable();

  private updateCart(): void {
    this.cartUpdatedSource.next();
    this.saveCart();
  }

  constructor() {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  private saveCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  setMedicines(medicines: Medicine[]): void {
    this.medicines = medicines;
  }

  getMedicines(): Medicine[] {
    return this.medicines;
  }
  addToCart(medicine: Medicine): void {
    const existingMedicine = this.cartItems.find(item => item.medicineID === medicine.medicineID);
    if (existingMedicine) {
      existingMedicine.quantity += medicine.quantity;
    } else {
      this.cartItems.push({ ...medicine });
      this.updateCart();
      this.saveCart();
      this.cartUpdatedSource.next();
    }
  }

  updateQuantity(medicineId: number, newQuantity: number): void {
    const medicine = this.cartItems.find(item => item.medicineID === medicineId);
    if (medicine) {
      medicine.quantity = newQuantity;
      this.updateCart();
      this.saveCart();
      this.cartUpdatedSource.next();
    }
  }

  removeItem(medicineId: number): void {
    this.cartItems = this.cartItems.filter(item => item.medicineID !== medicineId);
    this.updateCart();
    this.saveCart();
    this.cartUpdatedSource.next();
  }

  getCartItems(): Medicine[] {
    return this.cartItems;
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getMedicineById(id: number): Observable<Medicine | undefined> {
    const medicine = this.medicines.find((item: Medicine) => item.medicineID === id);
    return of(medicine);
  }
}

