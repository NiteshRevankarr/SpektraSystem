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
  discount: string;
  description: string;
  quantity: number;
  price: number;
  mrp: number;
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
 

  brands: Image[] = [
    { url: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/diabetic-care.jpg', alt: 'Brand 1' },
    { url: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/de-addiction.jpg', alt: 'Brand 2' },
    { url: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg', alt: 'Brand 3' },
    { url: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg', alt: 'Brand 4' },
    { url: 'https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/cold-and-fever.jpg', alt: 'Brand 5' },
   
  ];
  products: Product[] = [

    {
      name: 'SBL Cough Syrup',
      image: 'https://www.netmeds.com/images/product-v1/600x600/859456/sbl_stobal_cough_syrup_500_ml_0_0.jpg',
      discount: '30%',
      description: 'SBL Special Stobal  Cough Syrup 500 ml',
      quantity: 1,
      price: 203,
      mrp: 290
    },
  
    {
      name: 'Digestive Tonic',
      image: 'https://www.netmeds.com/images/product-v1/600x600/835964/dr_willmar_schwabe_dizester_tonic_500_ml_0.jpg',
      discount: '30%',
      description: 'Dr. Willmar Schwabe Dizester Herbal Digestive Tonic 500ml',
      quantity: 1,
      price: 252,
      mrp: 360
    },
    {
      name: 'Tone Up Tonic', // image product6
      image: 'https://www.netmeds.com/images/product-v1/600x600/831959/haslab_baby_tone_up_tonic_100_ml_0.jpg',
      discount: '11%',
      description: 'Haslab Special Baby Tone-Up Tonic 100 ml',
      quantity: 1,
      price: 75,
      mrp: 85
    },
    {
      name: 'Dr. Willmar Digestive Tonic',
      image: 'https://www.netmeds.com/images/product-v1/600x600/907439/dr_willmar_schwabe_dizester_herbal_digestive_tonic_sugar_free_200_ml_0_0.jpg',
      discount: '30%',
      description: 'Herbal Digestive Tonic 200ml',
      quantity: 1,
      price: 91,
      mrp: 130
    },
    {
      name: 'Throat Aid Tablet',
      image: 'https://www.netmeds.com/images/product-v1/600x600/831454/bakson_s_throat_aid_tablet_75_gm_0.jpg',
      discount: '10%',
      description: 'Baksons  Special Throat Aid Tablet 75 gm',
      quantity: 1,
      price: 193,
      mrp: 215
    },
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




  navigateToHomePagee() {
    this.router.navigate(['/home']);
  }
  
  navigateToCartPage(){
    this.router.navigate(['/cart']);
  }

  navigateToOfferPage(){
    this.router.navigate(['/offer']);
  }






}






