// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { Validators } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LoginserviceService } from '../loginservice.service';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-fgpwd',
//   templateUrl: './fgpwd.component.html',
//   styleUrls: ['./fgpwd.component.css']
// })

// export class FgpwdComponent {

//   serverMessage: any ;
//   resetPasswordForm!: FormGroup;
//   errorMessage: string = '';
//   successMessage: string = '';

//   title = 'AngularApp';
//   // public Service: ServiceService
//    public sampleform:any
//    data:any
//    constructor(private fb:FormBuilder,public router:Router, public api:LoginserviceService)
//    {
//     this.sampleform=this.fb.group({
//       email:[' ',[Validators.required, Validators.email]],
//       password:['',[Validators.required, Validators.minLength(8)]],
//       // confirmpassword:['',Validators.required],
//     })
// }

// get email() { return this.sampleform.get('email'); }
// get newPassword() { return this.sampleform.get('newPassword'); }



// forget(){
//   this.errorMessage = '';
//   this.successMessage = '';
//   console.log("hiii");
//   const newdata1 = {
//     "email":this.sampleform.controls['email'].value,
//     "newPassword":this.sampleform.controls['newPassword'].value
//     };

// this.api.forget(newdata1).subscribe(
// (res: any) => {
//   console.log(res.message);
//   this.serverMessage = res.message;

// console.log('Success message: ', res.message);
// this.successMessage = res.message;


// },
// (error: HttpErrorResponse) => {
// console.log('Error message: ', error.error);
// // this.errorMessage = JSON.stringify(error.error);
// this.errorMessage = error.error.error;

// }
// )


// }
   
//    submit()
//    {
//      console.log(this.sampleform.value); 
//    }
 
// }

import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fgpwd',
  templateUrl: './fgpwd.component.html',
  styleUrls: ['./fgpwd.component.css']
})
export class FgpwdComponent {
  serverMessage: any;
  resetPasswordForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  title = 'AngularApp';
  public sampleform: any;
  data: any;

  constructor(private fb: FormBuilder, public router: Router, public api: LoginserviceService) {
    this.sampleform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get email() { return this.sampleform.get('email'); }
  get password() { return this.sampleform.get('password'); }

  forget() {
    this.errorMessage = '';
    this.successMessage = '';
    console.log("hiii");
    const newdata1 = {
      "email": this.sampleform.controls['email'].value,
      "password": this.sampleform.controls['password'].value
    };

    this.api.forget(newdata1).subscribe(
      (res: any) => {
        console.log(res.message);
        this.serverMessage = res.message;
        console.log('Success message: ', res.message);
        this.successMessage = res.message;
      },
      (error: HttpErrorResponse) => {
        console.log('Error message: ', error.error);
        this.errorMessage = error.error.error;
      }
    );
  }

  login(){
    console.log('password reset successfully...',)
  }

  submit() {
    console.log(this.sampleform.value);
  }
}
