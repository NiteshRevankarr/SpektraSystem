import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../cart/Product.interface';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit, OnDestroy {

  totalItems!: number;
  private cartUpdateSubscription!: Subscription;
 

 

  navigateToNextPage() {
    this.router.navigate(['/offer']);
  }

  navigateToCartPage() {
    this.router.navigate(['/cart']);
  }

 
  products: Product[] = [];
  selectedProduct: Product | null = null;


  

  redirectToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  incrementQuantity(product: Product): void {
    product.quantity++;
  }

  decrementQuantity(product: Product): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  
  constructor(private router: Router,private cartService: CartService,private categoryService: CategoryService,private productService: ProductService) {
    this.cartService.setProducts(this.products);
   
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/products', productId]);
  }



  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }

  updateTotalItems(): void {
    this.totalItems = this.cartService.getTotalItems();
  }

  ngOnInit(): void {
    this.updateTotalItems();
    this.getCategories();   /// added 
    this.getProducts();
    this.cartUpdateSubscription = this.cartService.cartUpdated$.subscribe(() => {
      this.updateTotalItems();
      this.products = this.cartService.getProducts();
    });
  }

  
  ngOnDestroy(): void {
    if (this.cartUpdateSubscription) {
      this.cartUpdateSubscription.unsubscribe();
    }
  }



  isMenuVisible = true;
  categories: Category[] = [];

 
 

  /// added

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

//   addCategory(name: string): void {
//     this.categoryService.addCategory({ name } as Category).subscribe(category => this.categories.push(category));
//   }
// }


getProducts() {
  this.productService.getProducts().subscribe((products) => {
    this.products = products;
  });
}

selectProduct(product: Product) {
  this.selectedProduct = product;
}

createProduct(product: Product) {
  this.productService.createProduct(product).subscribe((newProduct) => {
    this.products.push(newProduct);
  });
}

updateProduct(product: Product) {
  this.productService.updateProduct(product.id, product).subscribe(() => {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  });
}

deleteProduct(id: number) {
  this.productService.deleteProduct(id).subscribe(() => {
    this.products = this.products.filter(product => product.id !== id);
  });
}

}











