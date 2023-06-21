import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private service:RegisterService,private router:Router,private messageService:MessageService) { }

  reactiveForm=this.fb.group({
    email:[,[Validators.required,Validators.email]],
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/')]]
  })

  login(){
    this.reactiveForm.reset();
    this.service.loginUser(this.reactiveForm.value).subscribe((res:any)=>{
      if(res.status){
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: res.message});
        localStorage.setItem("token",res.data)
        this.router.navigate(['home']);
      }else{
        this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: res.message});
      }
    })

  }
}
