import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';


interface Image {
  url: string;
  alt: string;
}


interface Product {
  name: string;
  image: string;
  price: string;
  discount: string;
  description: string;
  quantity: number;
}


@Component({
  selector: 'app-wellness',
  templateUrl: './wellness.component.html',
  styleUrls: ['./wellness.component.css']
})
export class WellnessComponent implements  OnInit {

  images: Image[] = [
    { url: 'assets/1685612903_BPL_wellness__web.jpg', alt: 'Image 1' },
    { url: 'assets/1685612554_Onetouch_Wellness_web.jpg', alt: 'Image 2' },
    { url: 'assets/1685643870_Devices__wellness_main_banner_web.jpg', alt: 'Image 3' },
    { url: 'assets/1685019762_Wellness_Title_Web.png', alt: 'Image 4' }
  ];




translateX = 0;
  currentIndex = 0;

  ngOnInit() {
    interval(5000).subscribe(() => {
      this.slide('left');
    });
  }

  slide(direction: string) {
    if (direction === 'left') {
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      this.translateX = -100 * this.currentIndex;
    }
  }


  constructor(private router: Router) {}
  navigateToNextPage() {
    this.router.navigate(['/offer']);
  }

  brands: Image[] = [
    { url: 'assets/Weightcaree.jpg', alt: 'Brand 1' },
    { url: 'assets/big-768x591.png', alt: 'Brand 2' },
    { url: 'assets/765-768x591.png', alt: 'Brand 3' },
    { url: 'assets/id5TKx0tK3.jpeg', alt: 'Brand 4' },
    { url: 'assets/images.png', alt: 'Brand 5' },
   
  ];
 

  products: Product[] = [
    {
      name: 'Penta Sure',
      image: 'assets/penta_sure_hp_100_whey_protein_banana_vanilla_flavour_1_kg_60522_0_1.jpg',
      price: '100',
      discount: '10%',
      description: 'Whey Protein Banana & Vanilla Flavour 1 kg',
      quantity: 1,
    },
    {
      name: 'Product 2',
      image: 'assets/765-768x591.png',
      price: '100',
      discount: '10%',
      description: 'This is a description for Product 2',
      quantity: 1,
    },
    {
      name: 'Product 3',
      image: 'assets/765-768x591.png',
      price: '100',
      discount: '10%',
      description: 'This is a description for Product 3',
      quantity: 1,
    },
    {
      name: 'Product 4',
      image: 'assets/765-768x591.png',
      price: '100',
      discount: '10%',
      description: 'This is a description for Product 4',
      quantity: 1,
    },
    {
      name: 'Product 5',
      image: 'assets/765-768x591.png',
      price: '100',
      discount: '10%',
      description: 'This is a description for Product 5',
      quantity: 1,
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
}




