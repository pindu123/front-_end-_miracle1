import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logic-form',
  templateUrl: './logic-form.component.html',
  styleUrls: ['./logic-form.component.css']
})
export class LogicFormComponent {
  errorMessage!: string;

 constructor( private router:Router,public sev:LoginserviceService){}

 myForm=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.minLength(5)])
 })

 isDisabled: boolean = true;

 onUserInput(event:any){

   let inputText = event.target.value;
   if(inputText==''){
     this.isDisabled = true;
   }
   else{
     this.isDisabled = false;
   }
 }


ngOnInit()
{
  this.fetch();
}



fetch() {
  const email = this.myForm.controls['email'].value;
  const password = this.myForm.controls['password'].value;

  const newdata1 = {
    email: email,
    password: password
  };

  this.sev.PostData3(newdata1).subscribe(
    (res: any) => {
      console.log(res);

      if (res && res === 'Login successful') {
        console.log('Login Successful');
        this.router.navigate(['lmain']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    },
    (error: any) => {
      console.error('Login Error:', error);
      this.errorMessage = 'Please Enter valid credentials.';
    }
  );
}




for(){
  this.router.navigate(['for']); 

}
sign(){
  this.router.navigate(['reg'])
}



}


