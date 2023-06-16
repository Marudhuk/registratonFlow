import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private service:RegisterService,private router:Router) { }

  reactiveForm=this.fb.group({
    email:[,[Validators.required,Validators.email]],
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/')]]
  })

  onSubmit(){
    console.log('Login');
    this.service.loginUser(this.reactiveForm.value).subscribe((data:any)=>{
      if(data.status){
        localStorage.setItem("token",data.data)
        this.router.navigate(['home']);
      }
    })

  }
}
