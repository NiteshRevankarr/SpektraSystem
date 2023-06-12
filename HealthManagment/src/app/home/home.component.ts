import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Product {
  name: string;
  image: string;
  discount: string;
  description: string;
  quantity: number;
  price: number;
  mrp: number;
}

interface Image {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  products: Product[] = [

    {
      name: 'Product 4',
      image: 'assets/penta_sure_hp_100_whey_protein_banana_vanilla_flavour_1_kg_60522_0_1.jpg',
      discount: '20%',
      description: 'Whey Protein Banana & Vanilla Flavour 1 kg',
      quantity: 1,
      price: 900,
      mrp: 1000
    },
  
    {
      name: 'Product 4',
      image: 'assets/penta_sure_hp_100_whey_protein_banana_vanilla_flavour_1_kg_60522_0_1.jpg',
      discount: '20%',
      description: 'Whey Protein Banana & Vanilla Flavour 1 kg',
      quantity: 1,
      price: 900,
      mrp: 1000
    },
    {
      name: 'Product 4',
      image: 'assets/penta_sure_hp_100_whey_protein_banana_vanilla_flavour_1_kg_60522_0_1.jpg',
      discount: '20%',
      description: 'Whey Protein Banana & Vanilla Flavour 1 kg',
      quantity: 1,
      price: 900,
      mrp: 1000
    },
    {
      name: 'Product 4',
      image: 'assets/penta_sure_hp_100_whey_protein_banana_vanilla_flavour_1_kg_60522_0_1.jpg',
      discount: '20%',
      description: 'Whey Protein Banana & Vanilla Flavour 1 kg',
      quantity: 1,
      price: 900,
      mrp: 1000
    },
    {
      name: 'Product 5',
      image: 'assets/penta_sure_hp_100_whey_protein_banana_vanilla_flavour_1_kg_60522_0_1.jpg',
      discount: '20%',
      description: 'Whey Protein Banana & Vanilla Flavour 1 kg',
      quantity: 1,
      price: 1900,
      mrp: 1000
    },

  

   
    // Add more products here
  ];

  incrementQuantity(index: number): void {
    this.products[index].quantity += 1;
  }

  decrementQuantity(index: number): void {
    if (this.products[index].quantity > 1) {
      this.products[index].quantity -= 1;
    }
  }

  addToCart(): void {
    // Redirect to the next page or add the product to the cart
  }

  navigateToNextPage() {
    this.router.navigate(['/offer']);
  }

  navigateTocarttPage() {
    this.router.navigate(['/offer']);
  }

  navigateToRegisterPage() {
    this.router.navigate(['/register']);
  }

  brands: Image[] = [
    { url: 'assets/Lakme-ka-itihash.jpg', alt: 'Brand 1' },
    { url: 'assets/big-768x591.png', alt: 'Brand 2' },
    { url: 'assets/765-768x591.png', alt: 'Brand 3' },
    { url: 'assets/id5TKx0tK3.jpeg', alt: 'Brand 4' },
    { url: 'assets/images.png', alt: 'Brand 5' },
   
  ];
}


