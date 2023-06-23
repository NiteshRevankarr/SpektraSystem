

// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginService } from '../login.service';
// import { AdminService } from '../admin.service';
// import { Admin } from '../Admin';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent 



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Admin } from '../Admin';
import { UserCountService } from '../user-count.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent    implements OnInit {
    isUserValid: boolean = false;
   
    constructor(private loginservice:LoginService, private router: Router,private toastr: ToastrService) {}
  
  
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
          //  alert('Login Unsuccessfull');
          this.toastr.error('Login Unsuccessful!');
          } else{
            this.isUserValid = true;
          //  alert('Login Successfull')
          this.toastr.success('Login Successful!');
          const email = this.signuplogin.value.email;
          if (email && email.includes('spektra')) {
            this.router.navigate(['/dashboard']);
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
  
  
  
  






















//   isUserValid: boolean = false;
//   ruser:any
 
//   constructor(private loginservice:LoginService, private router: Router,private userCountService: UserCountService) {}

//  ngOnInit() {
//   // Inside your login.ts component, after the user registration is successful
// this.loginservice.rUser(this.ruser).subscribe(response => {
//   if (response === 'Success') {
//     this.userCountService.refreshUserCount();
//   }
// });

  
// }

//   signuplogin =  new FormGroup({
//     email : new FormControl("", [Validators.required,Validators.email]),
//     password : new FormControl("", [Validators.required,Validators.minLength(5)]), 
//   });


//   loginform() {
//     this.loginservice.Get([
//       this.signuplogin.value.email as String,
//       this.signuplogin.value.password as String,
//     ]).subscribe((res: any) => {
//       if (res == 'Failure') {
//         this.isUserValid = false;
//         alert('Login Unsuccessful');
//       } else {
//         this.isUserValid = true;
//         alert('Login Successful')
  
//         const email = this.signuplogin.value.email;
//         if (email && email.includes('spektra')) {
//           // Get the admin ID and update the status to 'online'
//           this.loginservice.getAdminByEmail(email).subscribe((admin: Admin) => {
//             this.loginservice.updateAdminStatus(admin.adminId, 'online').subscribe(() => {
//               this.router.navigate(['/dashboard']);
//             });
//           });
//         } else {
//           this.router.navigate(['/home']);
//         }
//       }
//     });
//   }
  
  
//   get email(): FormControl {
//     return this.signuplogin.get("email") as FormControl
//   }
  
//   get password(): FormControl {
//     return this.signuplogin.get("password") as FormControl
//   }
// }
