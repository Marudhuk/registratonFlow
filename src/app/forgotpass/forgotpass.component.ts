import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {
  constructor(private fb:FormBuilder,private service:RegisterService,private router:Router) { }

  reactiveForm=this.fb.group({
    email:[,[Validators.required,Validators.email]]
  })

  ngOnInit() {

  }

  onSubmit(){
    this.service.forgotPassword(this.reactiveForm.value).subscribe((data:any)=>{
      if(data.status){
        console.log(data.message);
        this.router.navigate(['verifyForgotPass']);
        // localStorage.setItem('verifyForgotPass',this.reactiveForm.value.email);
      }
    })
  }

}
