import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student';
  constructor(private router:Router){}
 openparent()
{
  this.router.navigate(['/parent']);
 }
openchild()
{
   this.router.navigate(['/child']);
}

}
