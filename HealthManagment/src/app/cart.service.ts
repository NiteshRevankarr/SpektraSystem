import { Injectable } from '@angular/core';
import { Product } from './cart/Product.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private products: Product[] = [];

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

  setProducts(products: Product[]): void {
    this.products = products;
  }

  addToCart(product: Product): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cartItems.push({ ...product });
      this.updateCart();
      this.saveCart();
      this.cartUpdatedSource.next();
    }
  }

  updateQuantity(productId: number, newQuantity: number): void {
    const product = this.cartItems.find(item => item.id === productId);
    if (product) {
      product.quantity = newQuantity;
      this.updateCart();
      this.saveCart();
      this.cartUpdatedSource.next();
    }
  }

  removeItem(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCart();
    this.saveCart();
    this.cartUpdatedSource.next();
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find((item: Product) => item.id === id);
    return of(product);
  }


  getProducts(): Product[] {
    return this.products;
  }
}
