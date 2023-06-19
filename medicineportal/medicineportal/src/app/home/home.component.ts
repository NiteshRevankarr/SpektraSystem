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

interface Productt {
  name: string;
  image: string;
  discount: string;
  description: string;
  quantity: number;
  price: number;
  mrp: number;
}

interface Producttt {
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

interface Imagee {
  url: string;
}

interface Imageee {
  url: string;
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
      name: 'Indulekha Oil',
      image: 'assets/Product1.jpg',
      discount: '20%',
      description: 'Indulekha Oil 200ml Offer* Price',
      quantity: 1,
      price: 900,
      mrp: 1000
    },
  
    {
      name: 'AHAGLOW ',
      image: 'assets/Product5.jpg',
      discount: '15%',
      description: 'ADVANCEDFACE WASH Gel 200gm',
      quantity: 1,
      price: 90,
      mrp: 170
    },
    {
      name: 'Garnier Men ', // image product6
      image: 'assets/Product6.jpg',
      discount: '20%',
      description: ' Acnofight Anti Pimple Face Wash 50 gm',
      quantity: 1,
      price: 170,
      mrp: 300
    },
    {
      name: 'Aroma Magic ',
      image: 'assets/product7.jpg',
      discount: '10%',
      description: '  Activated Bamboo Charcoal Face Wash 100 ml',
      quantity: 1,
      price: 120,
      mrp: 234
    },
    {
      name: 'Himalaya',
      image: 'assets/Product8.jpg',
      discount: '50%',
      description: ' Purifying Neem Face Wash 200 ml',
      quantity: 1,
      price: 190,
      mrp: 400
    },
  // Add more products here
  ];

  productss: Productt[] = [

    {
      name: 'Volini Spray',
      image: 'https://www.netmeds.com/images/product-v1/600x600/388213/volini_spray_40gm_46241_0_2.jpg',
      discount: '17%',
      description: 'Volini Spray fro pain releif 40gm ',
      quantity: 1,
      price: 123,
      mrp: 149
    },
  
    {
      name: 'Aroma Oil',
      image: 'https://www.netmeds.com/images/product-v1/600x600/829641/aroma_magic_essential_oil_lavender_20_ml_0.jpg',
      discount: '15%',
      description: 'Aroma Magic Essential Oil 20 ml',
      quantity: 1,
      price: 351,
      mrp: 370
    },
    {
      name: 'Revital', // image product6
      image: 'https://www.netmeds.com/images/product-v1/600x600/113653/revital_h_capsule_60s_37254_0_1.jpg',
      discount: '17%',
      description: 'Revital H Capsule 60 S stamina booster',
      quantity: 1,
      price: 456,
      mrp: 550
    },
    {
      name: 'INLIFE Capsules',
      image: 'https://www.netmeds.com/images/product-v1/600x600/858567/inlife_triphala_extract_capsules_60s_78289_0_1.jpg',
      discount: '45%',
      description: 'INLIFE Triphala Extract Capsules 60 s',
      quantity: 1,
      price: 252,
      mrp: 459
    },
    {
      name: 'Zenith ',
      image: 'https://www.netmeds.com/images/product-v1/600x600/814953/zenith_nutrition_gin_kgo_biloba_60_mg_capsules_90s_59175_0_1.jpg',
      discount: '22%',
      description: 'Zenith Nutrition 60 mg Capsules 90 s',
      quantity: 1,
      price: 499,
      mrp: 640
    },
  ];

  productsss: Producttt[] = [

    {
      name: 'Head&Shoulders',
      image: 'https://www.netmeds.com/images/product-v1/600x600/814789/head_shoulders_anti_dandruff_shampoo_anti_hair_fall_72_ml_0.jpg',
      discount: '4%',
      description: 'Head & Shoulders Shampoo 72 ml',
      quantity: 1,
      price: 75,
      mrp: 79
    },
  
    {
      name: 'Veet Cream ',
      image: 'https://www.netmeds.com/images/product-v1/600x600/15203/veet_hair_removal_cream_sensitive_skin_100_gm_33330_0_3.jpg',
      discount: '2%',
      description: 'Veet Hair Removal Cream - Sensitive Skin 100 gm',
      quantity: 1,
      price: 274,
      mrp: 280
    },
    {
      name: 'Abzorb  ', // image product6
      image: 'https://www.netmeds.com/images/product-v1/600x600/827720/abzorb_dusting_powder_50gm_66005_0_5.jpg',
      discount: '16%',
      description: 'Abzorb Dusting Powder 50gm',
      quantity: 1,
      price: 66,
      mrp: 80
    },
    {
      name: 'Lacto ',
      image: 'https://www.netmeds.com/images/product-v1/600x600/411868/lacto_calamine_oil_balance_for_oily_skin_lotion_120_ml_0_3.jpg',
      discount: '6%',
      description: 'Lacto Calamine Lotion 120 ml',
      quantity: 1,
      price: 225,
      mrp: 240
    },
    {
      name: 'UV DOUX Gel',
      image: 'https://www.netmeds.com/images/product-v1/600x600/884734/uv_doux_silicone_sunscreen_spf_50_pa_geltopical_50gm_80563_0_2.jpg',
      discount: '14%',
      description: 'UV DOUX SILICONE Gel(Topical) 50gm',
      quantity: 1,
      price: 601,
      mrp: 699
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

  navigateToCarttPage() {
    this.router.navigate(['/cart']);
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

  brandss: Imagee[] = [
    { url: 'https://www.simpleskincare.com/sk-eu/content/dam/brands/vaseline/global_use/1501197-vaseline-petrolium-jelly-200g.jpg' },
    { url: 'https://www.boroplushealthyskin.com/wp-content/uploads/2018/11/240x330_1-1.jpg' },
    { url: 'https://www.bigbasket.com/media/uploads/p/l/266820-2_8-ponds-bright-beauty-spot-less-glow-day-cream.jpg' },
    { url: 'https://pestleanalysis.com/wp-content/uploads/2021/04/loreal-pestle-analysis.jpg' },
    { url: 'https://3.bp.blogspot.com/-mcagxg_780U/WEL3uGt0uzI/AAAAAAABsZ4/u_ohwk2T5wgWwmNjiY0UjhMVHXsiAnLNQCLcB/s640/Patanjali.png' },
   
  ];
  brandsss: Imageee[] = [
    { url: 'https://5.imimg.com/data5/SELLER/Default/2022/5/GC/KZ/TY/112345877/acidity-relief-juice-bottle-carton-mockup-500x500.png' },
    { url: 'https://m.media-amazon.com/images/I/61IcYkNuUlL.jpg' },
    { url: 'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2020-07/gc.jpg' },
    { url: 'https://imgshopimages.lbb.in/catalog/product/h/k/hk-sam-slhc-200-srhs-200-1.jpg' },
    { url: 'https://5.imimg.com/data5/SELLER/Default/2023/2/VT/XG/PB/159828892/herbal-face-wash.jpg' },
   
  ];


 
}









