import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Medicine } from '../cart/UserMedicine';
import { Category } from '../category/Category';
import { Router } from '@angular/router';
import { UserCategoryService } from '../user-category.service';
import { CartService } from '../cart.service';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit, OnDestroy {

    totalItems!: number;
    private cartUpdateSubscription!: Subscription;
    medicines: Medicine[] = []; 





  















    categories: Category[] = [];
    selectedMedicine: Medicine | null = null;
    selectedCategoryId: number | null = null;
  
    constructor(private router: Router,private cartService: CartService,private categoryService: UserCategoryService,private medicineService: MedicineService) {
      this.cartService.setMedicines(this.medicines);
     
    }
  
  
    navigateToNextPage() {
      this.router.navigate(['/offer']);
    }
    navigateToNextPagee() {
      this.router.navigate(['/home']);
    }
  
    navigateToCartPage() {
      this.router.navigate(['/cart']);
    }
  
  
  ///
    redirectToProduct(medicineId: number) {
      this.router.navigate(['/product', medicineId]);
    }
  
    incrementQuantity(medicine: Medicine): void {
      medicine.quantity++;
    }
  
    decrementQuantity(medicine: Medicine): void {
      if (medicine.quantity > 1) {
        medicine.quantity--;
      }
    }
  
    
  
    viewMedicineDetails(medicineId: number): void {
      this.router.navigate(['/products', medicineId]);
    }
    
  
    addToCart(medicine: Medicine): void {
      this.cartService.addToCart(medicine);
      this.router.navigate(['/cart']);
    }
  
    updateTotalItems(): void {
      this.totalItems = this.cartService.getTotalItems();
    }
  
    ngOnInit(): void {
      this.updateTotalItems();
      this.getCategories();   /// added 
      // this.getProducts();
      this.cartUpdateSubscription = this.cartService.cartUpdated$.subscribe(() => {
        this.updateTotalItems();
        this.medicines = this.cartService.getMedicines();
      });
    }
  
    
    ngOnDestroy(): void {
      if (this.cartUpdateSubscription) {
        this.cartUpdateSubscription.unsubscribe();
      }
    }
  
  
  
    isMenuVisible = true;
    
  
  
   
     navigateToCategoryProducts(categoryId: number): void {
      this.router.navigate(['/products', categoryId]);
    }
  
  
  
  
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  
    getCategories(): void {
      this.categoryService.getCategories().subscribe(categories => {
        console.log('Fetched categories:', categories);
        this.categories = categories;
      });
    }
    
  
  
  // getProducts(): void {
  //   this.productService.getProducts().subscribe((medicines) => {
  //     this.categoryService.getCategories().subscribe((categories) => {
  //       medicines.forEach((medicine) => {
  //         const category = categories.find((category) =>  category.categoryID=== medicine.categoryId);
  //         if (category) {
  //           medicine.categoryName =category.categoryName;
  //         }
  //       });
  
  //       this.medicines = this.selectedCategoryId
  //         ? medicines.filter((medicine) => medicine.categoryId === this.selectedCategoryId)
  //         : medicines;
  //     });
  //   });
  // }
  
  // selectProduct(medicine: Medicine) {
  //   this.selectedMedicine = medicine;
  // }
  
  // createProduct(medicine: Medicine) {
  //   this.productService.createProduct(medicine).subscribe((newMedicine) => {
  //     this.medicines.push(newMedicine);
  //   });
  // }
  
  // updateProduct(medicine: Medicine) {
  //   this.productService.updateProduct(medicine.id, medicine).subscribe(() => {
  //     const index = this.medicines.findIndex(p => p.id === medicine.id);
  //     if (index !== -1) {
  //       this.medicines[index] = medicine;
  //     }
  //   });
  // }
  
  
  
  
  // deleteProduct(id: number) {
  //   this.productService.deleteProduct(id).subscribe(() => {
  //     this.medicines = this.medicines.filter((medicine) => medicine.id !== id);
  //   });
  // }



  
  }
  
  
  
  
  
  
  
  
  
  
  
  
