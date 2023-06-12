import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserValid: boolean = false;
 
  constructor(private loginservice:LoginService, private router: Router) {}

  ngOnInit(): void {
    
  }

  signuplogin =  new FormGroup({
    email : new FormControl("", [Validators.required,Validators.email]),
    password : new FormControl("", [Validators.required,Validators.minLength(5)]), 
  });

  
  loginform() {
      
      this.loginservice.Get([
        this.signuplogin.value.email as String,
        this.signuplogin.value.password as String,
      ]).subscribe((res: any) => {
        if(res == 'Failure') {
          this.isUserValid = false;
          alert('Login Unsuccessfull');
        } else{
          this.isUserValid = true;
          alert('Login Successfull')

        const email = this.signuplogin.value.email;
        if (email && email.includes('spektra')) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }

        }
        
        
      });
  }
  
  get email(): FormControl {
    return this.signuplogin.get("email") as FormControl
  }
  
 
  
  get password(): FormControl {
    return this.signuplogin.get("password") as FormControl
  }
  
 
}
function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}




