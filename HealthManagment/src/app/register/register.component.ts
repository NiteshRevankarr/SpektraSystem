import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  confirmPass: string = 'none';

  displayMsg: string = '';
  isAccountCreated: boolean = false;
  
  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {
    
  }

  registerForm =  new FormGroup({
    Name : new FormControl("", [Validators.required,Validators.pattern("[a-zA-Z].*")]),
    email : new FormControl("", [Validators.required,Validators.email]),
    password : new FormControl("", [Validators.required,Validators.minLength(5)]),
    cpassword : new FormControl("")
  });

  register() {
    if (this.password.value == this.cpassword.value) {
      console.log(this.registerForm.valid);
      this.confirmPass = 'none';
      this.router.navigate(['/login']);
  
      this.loginservice.rUser([
        this.registerForm.value.Name as String,
        this.registerForm.value.email as String,
        this.registerForm.value.password as String,
        this.registerForm.value.cpassword as String,
      ]).subscribe((res:any) => {
        if(res == 'Success') {
          alert('Account Created Successfully');
        //  this.displayMsg = 'Account Created Successfully';
          this.isAccountCreated = true;
        } else if(res == 'Already Exist'){
          alert('Account already Exist. Try another Email ');
         // this.displayMsg='Account already Exist. Try another Email ';
          this.isAccountCreated = false;
        } else{
          alert('something went wrong');
         // this.displayMsg = 'something went wrong';
          this.isAccountCreated = false;
        }
        
         console.log(res);
      });
    } else {
      this.confirmPass = 'inline';
    }
  }
  

  get Name(): FormControl {
    return this.registerForm.get("Name") as FormControl
  }

  
  get email(): FormControl {
    return this.registerForm.get("email") as FormControl
  }
  
  get password(): FormControl {
    return this.registerForm.get("password") as FormControl
  }
  
  get cpassword(): FormControl {
    return this.registerForm.get("cpassword") as FormControl
  }
}
function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

