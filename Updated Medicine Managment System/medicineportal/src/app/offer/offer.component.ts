import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

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


}
