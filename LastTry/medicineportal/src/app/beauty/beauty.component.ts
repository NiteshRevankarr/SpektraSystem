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

interface Imagee {
  url: string;
  alt: string;
}

interface Productt {
  name: string;
  image: string;
  discount: string;
  description: string;
  quantity: number;
  price: number;
  mrp: number;
}


@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent  implements OnInit {
  images: Image[] = [
    { url: 'assets/1673592024_Netmed-Spotlight-1680x320.jpg', alt: 'Image 1' },
    { url: 'assets/1683699216_Deconstruct_1.jpg', alt: 'Image 2' },
    { url: 'assets/1683699356_Plum_1.jpg', alt: 'Image 3' },
    { url: 'assets/1683699550_Swiss-Beauty_1.jpg', alt: 'Image 4' }
  ];
  imagess: Imagee[] = [
    { url: 'assets/1673592024_Netmed-Spotlight-1680x320.jpg', alt: 'Image 1' },
    { url: 'assets/1683699216_Deconstruct_1.jpg', alt: 'Image 2' },
    { url: 'assets/1683699356_Plum_1.jpg', alt: 'Image 3' },
    { url: 'assets/1683699550_Swiss-Beauty_1.jpg', alt: 'Image 4' }
  ];

  products: Product[] = [

    {
      name: 'Himalaya  Face Wash ',
      image: 'https://www.netmeds.com/images/product-v1/600x600/13095/himalaya_purifying_neem_face_wash_100_ml_0_2.jpg',
      discount: '17%',
      description: 'Himalaya Purifying  & turmeric 100ml',
      quantity: 1,
      price: 124,
      mrp: 150
    },
  
    {
      name: 'D Acne Soft Face Wash',
      image: 'https://www.netmeds.com/images/product-v1/600x600/414294/d_acne_soft_face_wash_100gm_55377_0_2.jpg',
      discount: '18%',
      description: 'D Acne removal\ Face Wash 100gm',
      quantity: 1,
      price: 327,
      mrp: 399
    },
    {
      name: 'Cetaphil Gentle Skin Cleanser', // image product6
      image: 'https://www.netmeds.com/images/product-v1/600x600/814247/cetaphil_gentle_skin_cleanser_for_dry_and_sensitive_skin_125ml_58958_0_2.jpg',
      discount: '15%',
      description: 'Skin Cleanser For Dry  Skin 125ml',
      quantity: 1,
      price: 283,
      mrp: 333
    },
    {
      name: 'Papaya Fruit Facial Kit',
      image: 'https://www.netmeds.com/images/product-v1/600x600/14812/vlcc_papaya_fruit_facial_kit_small_0.jpg',
      discount: '15%',
      description: 'VLCC Papaya Fruit Facial Kit - Small',
      quantity: 1,
      price: 255,
      mrp: 300
    },
    {
      name: 'Aroma Skin Glow Facial Kit',
      image: 'https://www.netmeds.com/images/product-v1/600x600/829603/aroma_magic_skin_glow_facial_kit_200_gm_0.jpg',
      discount: '5%',
      description: 'Aroma Magic Skin Glow  200 gm',
      quantity: 1,
      price: 831,
      mrp: 875
    },
  // Add more products here
  ];
  productss: Productt[] = [

    {
      name: 'Gillette Shave Brush',
      image: 'https://www.netmeds.com/images/product-v1/600x600/13884/gillette_shave_brush_for_smoother_shaves_0.jpg',
      discount: '5%',
      description: 'Gillette Shave Brush for Smoother Shaves',
      quantity: 1,
      price: 66,
      mrp: 70
    },
  
    {
      name: 'Man Arden 7X Beard Oil',
      image: 'https://www.netmeds.com/images/product-v1/600x600/838548/man_arden_7x_beard_oil_the_woods_30_ml_1.jpg',
      discount: '13%',
      description: 'Man Arden 7X Beard  Woods 30 ml',
      quantity: 1,
      price: 347,
      mrp: 399
    },
    {
      name: 'Mancode  Beard Wash 100 ml', // image product6
      image: 'https://www.netmeds.com/images/product-v1/600x600/1025524/mancode_original_beard_wash_100_ml_0_0.jpg',
      discount: '40%',
      description: 'Mancode Beard Wash 100 ml',
      quantity: 1,
      price: 210,
      mrp: 350
    },
    {
      name: 'Set Wet Hair Gel for Men',
      image: 'https://www.netmeds.com/images/product-v1/600x600/12869/set_wet_hair_styling_gel_wet_look_50_ml_0.jpg',
      discount: '5%',
      description: 'Set Wet Hair Styling Gel - Wet Look 50 ml',
      quantity: 1,
      price: 52,
      mrp: 55
    },
    {
      name: 'Ustraa Hair Wax for Men',
      image: 'https://www.netmeds.com/images/product-v1/600x600/907544/ustraa_hair_wax_strong_hold_for_men_matte_look_100_gm_0_1.jpg',
      discount: '27%',
      description: 'Ustraa Hair  Matte Look 100 gm',
      quantity: 1,
      price: 291,
      mrp: 399
    },
  // Add more products here
  ];

  brands: Image[] = [
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOyPyYQKR0lEJiXH1z2r6mda1ORNPMJo49YcAcnpQpLclVx_64Y-Fxne_Fn5pVWOKsHxnJS9aiCo&usqp=CAU&ec=48665701', alt: 'Brand 1' },
    { url: 'https://www.shutterstock.com/image-photo/madrid-spain-01192021-can-nivea-260nw-1898005447.jpg', alt: 'Brand 2' },
    { url: 'https://m.media-amazon.com/images/I/81Mhoi8b+nL._AC_UF1000,1000_QL80_.jpg', alt: 'Brand 3' },
    { url: 'https://m.media-amazon.com/images/I/71-TdoRbMzL._AC_UF1000,1000_QL80_.jpg', alt: 'Brand 4' },
    { url: 'https://rukminim1.flixcart.com/image/850/1000/k1b1bbk0/fairness/r/t/y/80-men-power-white-fairness-moisturiser-40g-pack-of-2-garnier-original-imafkvzmgrcs8ett.jpeg?q=20', alt: 'Brand 5'},
  
  ];
  translateX = 0;
  currentIndex = 0;

  brandss: Imagee[] = [
    { url: 'https://pbs.twimg.com/media/E9pMaCGVIAQXJ6N.jpg', alt: 'Brand 1' },
    { url: 'https://wiproconsumercare.com/wp-content/uploads/Creative-2-Standard-Module-Header-1.jpg', alt: 'Brand 2' },
    { url: 'https://e0.pxfuel.com/wallpapers/527/417/desktop-wallpaper-gillette-blue-logo-blue-brickwall-gillette-logo-brands-gillette-neon-logo-gillette-thumbnail.jpg', alt: 'Brand 3' },
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyBSlqknqS06FWaA2oE6fDC6uyX8HyRidU1PvzH7CY0yNW0-VyVSk2UygVIxUqMtUdARq0XDKGsA&usqp=CAU&ec=48665701', alt: 'Brand 4' },
    { url: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2011/10/28/1319798282544/The-Clinique-3-step-skin--007.jpg?width=465&quality=85&dpr=1&s=none', alt: 'Brand 5'},
  
  ];
  
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






  

  navigateToHomePagee() {
    this.router.navigate(['/home']);
  }
  
  navigateToCartPage(){
    this.router.navigate(['/cart']);
  }

  navigateToOfferPage(){
    this.router.navigate(['/offer']);
  }
  
  
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

  incrementQuantityy(index: number): void {
    this.productss[index].quantity += 1;
  }

  decrementQuantityy(index: number): void {
    if (this.productss[index].quantity > 1) {
      this.productss[index].quantity -= 1;
    }
  }

  addToCartt(): void {
    // Redirect to the next page or add the product to the cart
  }

}



