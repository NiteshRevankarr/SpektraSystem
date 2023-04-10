import { Component } from '@angular/core';

interface Product {
  id: Number;
  image: string;
  description: string;
  price: number;
  size: string;
  quantity: number;
}
@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent {

  products: Product[] = [
    {
      id: 52738393,
      image: 'https://voilastudio.in/images/VMM11/2500.webp',
      description: 'Navy Blue full Sleeves',
      price: 490,
      size: 'S',
      quantity: 1
    },
    {
      id: 52738394,
      image: 'https://voilastudio.in/images/VMM11/2504.webp',
      description: 'T-shirt',
      price: 400,
      size: 'M',
      quantity: 1
    },
    {
      id: 52738395,
      image: 'https://voilastudio.in/images/VMM11/2525.webp',
      description: 'Leather Jacket',
      price: 1400,
      size: 'L',
      quantity: 1
    },
    {
      id: 52738395,
      image: 'https://voilastudio.in/images/VMM11/2506.webp',
      description: 'White Shirt',
      price: 990,
      size: 'XL',
      quantity: 1
    }
  ];

  sizes: string[] = ['S', 'M', 'L', 'XL'];

  decrementQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  incrementQuantity(product: Product) {
    product.quantity++;
  }

  getTotalPrice() {
    return this.products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);
  }

  checkout() {
    alert("Thank you for shopping!");
  }

  selectSize(event: Event, product: any) {
    const target = event.target as HTMLSelectElement;
    product.size = target.value;
  }
  
}

















  