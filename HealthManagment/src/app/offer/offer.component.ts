import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  constructor(private router: Router) {}


  navigateToNextPage() {
    this.router.navigate(['/Offer']);
  }
  
  
}
