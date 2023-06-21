import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {
  constructor(private fb:FormBuilder,private service:RegisterService,private router:Router,private messageService:MessageService) { }

  reactiveForm=this.fb.group({
    email:[,[Validators.required,Validators.email]]
  })

  ngOnInit() {

  }

  sendForgotPassEmail(){
    this.reactiveForm.reset();
    this.service.forgotPassword(this.reactiveForm.value).subscribe((res:any)=>{
      if(res.status){
        this.router.navigate(['verifyForgotPass']);
      }else{
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: res.message});
      }
    })
  }

}
