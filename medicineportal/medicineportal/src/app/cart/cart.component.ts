import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medicine } from './UserMedicine';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { CustomerOrder } from './CustomerOrder';
import { CustomerorderService } from '../customerorder.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Medicine[] = [];

  paymentDetailsForm: FormGroup;

  showPaymentDetails = false;

  alertMessage!: string;

  isMenuVisible = true;
  toggleMenu(): void {

    this.isMenuVisible = !this.isMenuVisible;

  }

  navigateToNextPage() {

    this.router.navigate(['/offer']);

  }




 

 

    constructor(private cartService: CartService, private router: Router,private formBuilder: FormBuilder,
      private customerOrderService:CustomerorderService)

    {

      this.paymentDetailsForm = this.formBuilder.group({

        fullName: ['', Validators.required],

        email: ['', [Validators.required, Validators.email]],

        phone: ['', Validators.required],

        address: ['', Validators.required],

        city: ['', Validators.required],

        state: ['', Validators.required],

        zip: ['', Validators.required]

      });

    }





   





   

 

    addDeliveryAddress() {

      // Your logic to add delivery address

    }

   




   

  ngOnInit(): void {

    this.cartItems = this.cartService.getCartItems();

   

  }




  incrementQuantity(item: Medicine): void {

    this.cartService.updateQuantity(item.id, item.quantity + 1);

  }




  decrementQuantity(item: Medicine): void {

    if (item.quantity > 1) {

      this.cartService.updateQuantity(item.id, item.quantity - 1);

    }

  }




  removeItem(medicineId: number): void {

    this.cartService.removeItem(medicineId);

    this.cartItems = this.cartService.getCartItems();

  }




  getTotal(): number {

    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  }

 




  increaseQuantity(item: Medicine) {

    item.quantity++;

  }




  decreaseQuantity(item: Medicine) {

    if (item.quantity > 1) {

      item.quantity--;

    }

  }





  additionalDiscount = 50;

  shippingCharges = 30;





  navigateToProductPage() {

    this.router.navigate(['/medicine']);

  }






  togglePaymentDetails(): void {

    this.showPaymentDetails = !this.showPaymentDetails;

  }





 




  openPaymentDetails(): void {

    this.showPaymentDetails = true;

  }




  onSubmit(): void {

    if (this.paymentDetailsForm.valid) {

      const customerOrder: CustomerOrder = {

        OrderID: 0, // You should generate or fetch the OrderID from your backend

        UserID: 0, // You should fetch the UserID from your authentication system

        FullName: this.paymentDetailsForm.get('fullName')?.value,

        Email: this.paymentDetailsForm.get('email')?.value,

        PhoneNumber: this.paymentDetailsForm.get('phone')?.value,

        Address: this.paymentDetailsForm.get('address')?.value,

        City: this.paymentDetailsForm.get('city')?.value,

        State: this.paymentDetailsForm.get('state')?.value,

        ZipCode: this.paymentDetailsForm.get('zip')?.value

      };

 

      this.customerOrderService.sendCustomerOrder(customerOrder).subscribe({

        next: () => {

          // Handle the response from the server, e.g., show a success message

        },

        error: () => {

          // Handle the error from the server, e.g., show an error message

        }

      });

    }

  }

 






 

  closeSideMenu() {

    this.showPaymentDetails = false;

  }





  paymentOption(option: string) {

    if (option === 'wallet') {

      this.alertMessage = 'Insufficient balance';

    } else if (option === 'cod') {

      this.alertMessage = 'Be at home';

    }

  }

}










