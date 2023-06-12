import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from './Product.interface';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  isMenuVisible = true;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  
  navigateToNextPage() {
    this.router.navigate(['/offer']);
  }

  

    cartItems: Product[] = [];
  
    constructor(private cartService: CartService, private router: Router,private formBuilder: FormBuilder) {}
  
   
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  incrementQuantity(item: Product): void {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  decrementQuantity(item: Product): void {
    if (item.quantity > 1) {
      this.cartService.updateQuantity(item.id, item.quantity - 1);
    }
  }

  removeItem(productId: number): void {
    this.cartService.removeItem(productId);
    this.cartItems = this.cartService.getCartItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.bestPrice), 0);
  }

  increaseQuantity(item: Product) {
    item.quantity++;
  }

  decreaseQuantity(item: Product) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }


  additionalDiscount = 50;
  shippingCharges = 30;


  navigateToProductPage() {
    this.router.navigate(['/medicine']);
  }

}













  
  



