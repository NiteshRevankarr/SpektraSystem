import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

interface Image {
  url: string;
  alt: string;
}





@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {
  images: Image[] = [
    { url: 'assets/1673592024_Netmed-Spotlight-1680x320.jpg', alt: 'Image 1' },
    { url: 'assets/1683699216_Deconstruct_1.jpg', alt: 'Image 2' },
    { url: 'assets/1683699356_Plum_1.jpg', alt: 'Image 3' },
    { url: 'assets/1683699550_Swiss-Beauty_1.jpg', alt: 'Image 4' }
  ];


  brands: Image[] = [
    { url: 'assets/Lakme-ka-itihash.jpg', alt: 'Brand 1' },
    { url: 'assets/big-768x591.png', alt: 'Brand 2' },
    { url: 'assets/765-768x591.png', alt: 'Brand 3' },
    { url: 'assets/id5TKx0tK3.jpeg', alt: 'Brand 4' },
    { url: 'assets/images.png', alt: 'Brand 5'},
  
  ];
  translateX = 0;
  currentIndex = 0;  

  ngOnInit() {
    interval(5000).subscribe(() => {
      this.slide('left');
    });
  }

  slide(direction: string) {
    if (direction === 'left') {
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      this.translateX = -100 * this.currentIndex;
    }
  }

  constructor(private router: Router) {}
  navigateToNextPage() {
    this.router.navigate(['/offer']);
  }



}

