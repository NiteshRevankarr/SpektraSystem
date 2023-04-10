import { Component } from '@angular/core';

@Component({
  selector: 'app-rbutton',
  templateUrl: './rbutton.component.html',
  styleUrls: ['./rbutton.component.css']
})
export class RbuttonComponent {
  message: string = '';

  showMessage(valid: boolean) {
    if (valid) {
      this.message = 'Data is valid';
    } else {
      this.message = 'Data is invalid';
    }
  }
}