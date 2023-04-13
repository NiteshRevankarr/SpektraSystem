import { Component } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  cartItems: CartItem[] = [];

  addToCart(name: string, price: number) {
    const index = this.cartItems.findIndex(cartItem => cartItem.name === name);
    if (index !== -1) {
      this.cartItems[index].quantity++;
    } else {
      this.cartItems.push({ name, price, quantity: 1 });
    }
  }

  incrementQuantity(item: CartItem) {
    item.quantity++;
  }
  

  decrementQuantity(item: CartItem) {
    if (item.quantity > 0) {
      item.quantity--;
    } else {
      const index = this.cartItems.findIndex(cartItem => cartItem.name === item.name);
      this.cartItems.splice(index, 1);
    }
  }
  increment(index: number) {
    this.cartItems[index].quantity++;
  }
  decrement(index: number) {
    this.cartItems[index].quantity--;
  }
  
  


  getTotalPrice() {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.quantity * item.price;
    });
    return '₹' + total.toLocaleString();
  }


  
checkout(): void {
  const totalPrice = this.getTotalPrice(); 
  if (totalPrice === '₹0') { 
    alert('Your cart is empty!'); 
    return; 
  }
  const confirmation = confirm(`Your total is ${totalPrice}. Confirm purchase?`); 
  if (confirmation) { 
    alert('Thank you for your purchase!');
    this.clearCart(); 
  }
}
  clearCart() {
    throw new Error('Method not implemented.');
  }
} 