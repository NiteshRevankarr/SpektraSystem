import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../cart/Product.interface';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  product:Product|undefined;
  
  

  constructor(private router: Router,private route: ActivatedRoute, private cartService: CartService) { }

  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cartService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }

  
navigateToNextPage() {
  this.router.navigate(['/offer']);
}



viewProductDetails(productId: number): void {
  this.router.navigate(['/products', productId]);
}




  decrementQuantity(product: Product): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  incrementQuantity(product: Product): void {
    product.quantity++;
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
}
}
