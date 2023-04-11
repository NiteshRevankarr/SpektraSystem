import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';
import { Router } from '@angular/router';

import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    id: '',
    name: '',
    gender: '',
    email: '',
    coursefee: ''
  };

  constructor(private formDataService: FormDataService, private router: Router) { }

  onSubmit() {
    this.formDataService.setFormData(this.formData);
    this.router.navigate(['/nextpage']);
  }
}

