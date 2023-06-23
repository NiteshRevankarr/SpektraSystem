import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Category } from '../category/Category';
import { Router } from '@angular/router';
import { UserCategoryService } from '../user-category.service';

import { MedicineService } from '../medicine.service';
import { CartService } from '../cart.service';
import { Medicine } from '../adminmedicine/Medicine';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit, OnDestroy {


    totalItems!: number;
    private cartUpdateSubscription!: Subscription;
    medicines: Medicine[] = []; 
    medicines1: Medicine[] = []; 
    categories: Category[] = [];
    selectedMedicine: Medicine | null = null;
    selectedCategoryName: string ='';
    searchText: string;
  
    constructor(private router: Router,private cartService: CartService,private categoryService: UserCategoryService,private medicineService: MedicineService) {
      this.cartService.setMedicines(this.medicines);
      this.searchText='';
     
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
    
  
    // addToCart(medicine: Medicine): void {
    //   this.cartService.addToCart(medicine);
    //   this.router.navigate(['/cart']);
    // }

    addToCart(medicine: Medicine) {
      let medicineCopy: Medicine = { ...medicine };
      medicineCopy.quantity = 1;
      this.cartService.addToCart(medicineCopy);
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
      this.getAllMedicines();
      });
    }
  
    // getAllMedicines(){
      
    //   this.medicineService.getMedicines().subscribe((data:any)=>{
    //     this.medicines=data;
    //     console.log(this.medicines);
    //   })
    // }

    getAllMedicines(){
      
      this.medicineService.getMedicines().subscribe((data:any)=>{
        this.medicines=data;
        console.log(this.medicines);
      })
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



  //==========================================================================================
  


  //==========================================================================================
  selectedCategory: string = '';
  selectCategory(categoryName: string) {
      this.selectedCategory = categoryName;
      this.medicineService.getMedicines().subscribe((data: any) => {
        this.medicines = data.filter((medicine: any) => medicine.categoryName === this.selectedCategory );
        console.log(this.medicines);
      });
    }

}


