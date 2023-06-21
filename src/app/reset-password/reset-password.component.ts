import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  
  constructor(private fb:FormBuilder,private service:RegisterService,private router:Router,private messageService:MessageService) { }

  reactiveForm=this.fb.group({
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/')]],
    cPassword:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15),Validators.pattern('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/')]]

  })

  resetPassword(){
    this.reactiveForm.reset();
    let token= localStorage.getItem('token'); 
    
    let body={password:this.reactiveForm.value["password"],token:token}

    this.service.resetPassword(body).subscribe((data:any)=>{
      if(data.status){
        console.log(data.message);
        this.router.navigate(['login'])
      }else{
        this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: data.message});
      }
    })

  }
}
