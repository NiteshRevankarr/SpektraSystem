// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Medicine } from './UserMedicine';
// import { CartService } from '../cart.service';
// import { Router } from '@angular/router';
// import { CustomerOrder } from './CustomerOrder';
// import { CustomerorderService } from '../customerorder.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {

//   cartItems: Medicine[] = [];

//   paymentDetailsForm: FormGroup;

//   showPaymentDetails = false;

//   alertMessage!: string;

//   isMenuVisible = true;
//   toggleMenu(): void {

//     this.isMenuVisible = !this.isMenuVisible;

//   }

//   navigateToNextPage() {

//     this.router.navigate(['/offer']);

//   }




 

 

//     constructor(private cartService: CartService, private router: Router,private formBuilder: FormBuilder,
//       private customerOrderService:CustomerorderService)

//     {

//       this.paymentDetailsForm = this.formBuilder.group({

//         fullName: ['', Validators.required],

//         email: ['', [Validators.required, Validators.email]],

//         phone: ['', Validators.required],

//         address: ['', Validators.required],

//         city: ['', Validators.required],

//         state: ['', Validators.required],

//         zip: ['', Validators.required]

//       });

//     }





   





   

 

//     addDeliveryAddress() {

//       // Your logic to add delivery address

//     }

   




   

//   ngOnInit(): void {

//     this.cartItems = this.cartService.getCartItems();

   

//   }




//   incrementQuantity(item: Medicine): void {

//     this.cartService.updateQuantity(item.id, item.quantity + 1);

//   }




//   decrementQuantity(item: Medicine): void {

//     if (item.quantity > 1) {

//       this.cartService.updateQuantity(item.id, item.quantity - 1);

//     }

//   }




//   removeItem(medicineId: number): void {

//     this.cartService.removeItem(medicineId);

//     this.cartItems = this.cartService.getCartItems();

//   }




//   getTotal(): number {

//     return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

//   }

 




//   increaseQuantity(item: Medicine) {

//     item.quantity++;

//   }




//   decreaseQuantity(item: Medicine) {

//     if (item.quantity > 1) {

//       item.quantity--;

//     }

//   }





//   additionalDiscount = 50;

//   shippingCharges = 30;





//   navigateToProductPage() {

//     this.router.navigate(['/medicine']);

//   }






//   togglePaymentDetails(): void {

//     this.showPaymentDetails = !this.showPaymentDetails;

//   }





 




//   openPaymentDetails(): void {

//     this.showPaymentDetails = true;

//   }




//   onSubmit(): void {

//     if (this.paymentDetailsForm.valid) {

//       const customerOrder: CustomerOrder = {

//         OrderID: 0, // You should generate or fetch the OrderID from your backend

//         UserID: 0, // You should fetch the UserID from your authentication system

//         FullName: this.paymentDetailsForm.get('fullName')?.value,

//         Email: this.paymentDetailsForm.get('email')?.value,

//         PhoneNumber: this.paymentDetailsForm.get('phone')?.value,

//         Address: this.paymentDetailsForm.get('address')?.value,

//         City: this.paymentDetailsForm.get('city')?.value,

//         State: this.paymentDetailsForm.get('state')?.value,

//         ZipCode: this.paymentDetailsForm.get('zip')?.value

//       };

 

//       this.customerOrderService.sendCustomerOrder(customerOrder).subscribe({

//         next: () => {

//           // Handle the response from the server, e.g., show a success message

//         },

//         error: () => {

//           // Handle the error from the server, e.g., show an error message

//         }

//       });

//     }

//   }

 






 

//   closeSideMenu() {

//     this.showPaymentDetails = false;

//   }





//   paymentOption(option: string) {

//     if (option === 'wallet') {

//       this.alertMessage = 'Insufficient balance';

//     } else if (option === 'cod') {

//       this.alertMessage = 'Be at home';

//     }

//   }

// }




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { Medicine } from '../adminmedicine/Medicine';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { CustomerorderService } from '../customerorder.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {
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

  navigateToHomePage() {

    this.router.navigate(['/home']);

  }

  navigateToOfferPage(){

    this.router.navigate(['/offer']);

  }

navigateTologinPage(){

  this.router.navigate(['/login']);

}

    constructor(private cartService: CartService, private router: Router,private formBuilder: FormBuilder,
      private customerOrderService:CustomerorderService,private loginService:LoginService)
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
      this.showPaymentDetails = true;
      this.alertMessage = '';
    }
    

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotal();
  }

  incrementQuantity(item: Medicine): void {
    this.cartService.updateQuantity(item.medicineID, item.quantity + 1);
    this.updateTotal();

  }
  decrementQuantity(item: Medicine): void {
    if (item.quantity > 1) {
    this.cartService.updateQuantity(item.medicineID, item.quantity - 1);
    this.updateTotal();
    }

  }


  removeItem(medicineId: number): void {
    this.cartService.removeItem(medicineId);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotal();
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  }

  increaseQuantity(item: Medicine) {
   
    item.quantity++;
    this.updateTotal();
  }

  decreaseQuantity(item: Medicine) {
   
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotal();
    }

  }

  additionalDiscount = 50;
  shippingCharges = 30;
  totalPayable = 0;


  updateTotal(): void {
    const totalPrice = this.getTotal();
    const discountedPrice = totalPrice - this.additionalDiscount;
    this.totalPayable = discountedPrice + this.shippingCharges;
  }
  


  navigateToProductPage() {
    this.router.navigate(['/medicine']);

  }
 
  togglePaymentDetails(): void {
    if (!this.showPaymentDetails) {
      this.showPaymentDetails = true;
    }
  }


  orderSuccessful: boolean = false;


  openPaymentDetails(): void {
   this.showPaymentDetails = true;

  }
  
onSubmit(): void {
  const userId = this.loginService.getUserID();
  console.log("userId" + userId);
  if (this.paymentDetailsForm.valid && userId) {
    // Fetch the cart items from your cart service
    const orderItems = this.cartService.getCartItems().map(item => ({
      orderItemId: item.medicineID, // or some other unique identifier
      orderId: this.cartService.getCartItems().length.toString(), // Using the length of the cartItems array as the orderId
      medicineId: item.medicineID,
      quantity: item.quantity,
      price: item.price
    }));

    const customerOrder = {
      orderId: this.cartService.getCartItems().length.toString(), // Using the length of the cartItems array as the orderId
      userId: userId,
      fullName: this.paymentDetailsForm.get('fullName')?.value,
      email: this.paymentDetailsForm.get('email')?.value,
      phone: this.paymentDetailsForm.get('phone')?.value,
      address: this.paymentDetailsForm.get('address')?.value,
      city: this.paymentDetailsForm.get('city')?.value,
      state: this.paymentDetailsForm.get('state')?.value,
      zip: this.paymentDetailsForm.get('zip')?.value,
      totalAmount: (this.getTotal() - this.additionalDiscount + this.shippingCharges),
      shippingCharges: this.shippingCharges,
      orderDate: "2023-06-20",
      orderItems: orderItems
    };

    console.log(customerOrder);


    this.customerOrderService.sendCustomerOrder(customerOrder).subscribe({
      next: () => {
        console.log("added successfully");
        this.alertMessage = 'Address saved successfully';
        this.showPaymentDetails = false; // Hide the form
        this.closeSideMenu(); // Close the side menu
      },
      error: () => {
        console.log("error");
      }
    });
  }
}



onProceed(): void {
  if (this.paymentDetailsForm.valid) {
    this.alertMessage = 'Order successful';
  } else {
    this.alertMessage = 'Add the delivery address';
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










// onSubmit(): void {
  //   const userId=this.loginService.getUserID();
  //   console.log("userId"+userId);
  //   if (this.paymentDetailsForm.valid && userId) {
  //     const oderItems=[{
  //       orderItemId:1,
  //       orderId:2,
  //       medicineId:1,
  //       quantity:2,
  //       price:200
  //     }]
  //     const customerOrder= {
  //       orderId: 2, // You should generate or fetch the OrderID from your backend
  //       userId: userId, // You should fetch the UserID from your authentication system
  //       fullName: this.paymentDetailsForm.get('fullName')?.value,
  //       email: this.paymentDetailsForm.get('email')?.value,
  //       phone: this.paymentDetailsForm.get('phone')?.value,
  //       address: this.paymentDetailsForm.get('address')?.value,
  //       city: this.paymentDetailsForm.get('city')?.value,
  //       state: this.paymentDetailsForm.get('state')?.value,
  //       zip: this.paymentDetailsForm.get('zip')?.value,
  //       totalAmount:(this.getTotal() - this.additionalDiscount + this.shippingCharges),
  //       shippingCharges:this.shippingCharges,
  //       orderDate:"2023-06-20",
  //       orderItems:oderItems

        
  //     };
  //     console.log(customerOrder);
  //     this.customerOrderService.sendCustomerOrder(customerOrder).subscribe({
  //       next: () => {
  //         console.log("added successfully");
  //         // Handle the response from the server, e.g., show a success messa
  //       },
  //       error: () => {
  //         console.log("error");
  //       }

  //     });

  //   }
  // }





//   onSubmit(): void {
//     const userId = this.loginService.getUserID();
//     console.log("userId" + userId);
//     if (this.paymentDetailsForm.valid && userId) {
//       // Fetch the cart items from your cart service
//       const orderItems = this.cartService.getCartItems().map(item => ({
//         orderItemId: item.medicineID, // or some other unique identifier
//         orderId: '1', // 
//         medicineId: item.medicineID,
//         quantity: item.quantity,
//         price: item.price
//       }));

//       const customerOrder = {
//         orderId: '1', // You should generate or fetch the OrderID from your backend
//         userId: userId, // You should fetch the UserID from your authentication system
//         fullName: this.paymentDetailsForm.get('fullName')?.value,
//         email: this.paymentDetailsForm.get('email')?.value,
//         phone: this.paymentDetailsForm.get('phone')?.value,
//         address: this.paymentDetailsForm.get('address')?.value,
//         city: this.paymentDetailsForm.get('city')?.value,
//         state: this.paymentDetailsForm.get('state')?.value,
//         zip: this.paymentDetailsForm.get('zip')?.value,
//         totalAmount: (this.getTotal() - this.additionalDiscount + this.shippingCharges),
//         shippingCharges: this.shippingCharges,
//         orderDate: "2023-06-20",
//         orderItems: orderItems
//       };

//       console.log(customerOrder);
//       this.customerOrderService.sendCustomerOrder(customerOrder).subscribe({
//         next: () => {
//           console.log("added successfully");
//           // Handle the response from the server, e.g., show a success message
//         },
//         error: () => {
//           console.log("error");
//         }
//       });
//     }
// }


/// Working prefectly

// onSubmit(): void {
//   const userId = this.loginService.getUserID();
//   console.log("userId" + userId);
//   if (this.paymentDetailsForm.valid && userId) {
//     // Fetch the cart items from your cart service
//     const orderItems = this.cartService.getCartItems().map(item => ({
//       orderItemId: item.medicineID, // or some other unique identifier
//       orderId: Math.floor(Math.random() * 1000000).toString(), // Generating a random orderId
//       medicineId: item.medicineID,
//       quantity: item.quantity,
//       price: item.price
//     }));

//     // Generate a random orderId
//     const orderId = Math.floor(Math.random() * 1000000).toString();

//     const customerOrder = {
//       orderId: orderId, // Using the generated orderId
//       userId: userId,
//       fullName: this.paymentDetailsForm.get('fullName')?.value,
//       email: this.paymentDetailsForm.get('email')?.value,
//       phone: this.paymentDetailsForm.get('phone')?.value,
//       address: this.paymentDetailsForm.get('address')?.value,
//       city: this.paymentDetailsForm.get('city')?.value,
//       state: this.paymentDetailsForm.get('state')?.value,
//       zip: this.paymentDetailsForm.get('zip')?.value,
//       totalAmount: (this.getTotal() - this.additionalDiscount + this.shippingCharges),
//       shippingCharges: this.shippingCharges,
//       orderDate: "2023-06-20",
//       orderItems: orderItems
//     };

//     console.log(customerOrder);
//     this.customerOrderService.sendCustomerOrder(customerOrder).subscribe({
//       next: () => {
//         console.log("added successfully");
//         // Handle the response from the server, e.g., show a success message
//       },
//       error: () => {
//         console.log("error");
//       }
//     });
//   }
// }




// onSubmit(): void {
//   const userId = this.loginService.getUserID();
//   console.log("userId" + userId);
//   if (this.paymentDetailsForm.valid && userId) {
//     // Fetch the cart items from your cart service
//     const orderItems = this.cartService.getCartItems().map(item => ({
//       orderItemId: item.medicineID, // or some other unique identifier
//       orderId: this.cartService.getCartItems().length.toString(), // Using the length of the cartItems array as the orderId
//       medicineId: item.medicineID,
//       quantity: item.quantity,
//       price: item.price
//     }));

//     const customerOrder = {
//       orderId: this.cartService.getCartItems().length.toString(), // Using the length of the cartItems array as the orderId
//       userId: userId,
//       fullName: this.paymentDetailsForm.get('fullName')?.value,
//       email: this.paymentDetailsForm.get('email')?.value,
//       phone: this.paymentDetailsForm.get('phone')?.value,
//       address: this.paymentDetailsForm.get('address')?.value,
//       city: this.paymentDetailsForm.get('city')?.value,
//       state: this.paymentDetailsForm.get('state')?.value,
//       zip: this.paymentDetailsForm.get('zip')?.value,
//       totalAmount: (this.getTotal() - this.additionalDiscount + this.shippingCharges),
//       shippingCharges: this.shippingCharges,
//       orderDate: "2023-06-20",
//       orderItems: orderItems
//     };

//     console.log(customerOrder);
//     this.customerOrderService.sendCustomerOrder(customerOrder).subscribe({
//       next: () => {
//         console.log("added successfully");
//         // Handle the response from the server, e.g., show a success message
//       },
//       error: () => {
//         console.log("error");
//       }
//     });
//   }
// }


