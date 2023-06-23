import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrls: ['./labtest.component.css']
})
export class LabtestComponent {

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
