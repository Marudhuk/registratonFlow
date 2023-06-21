import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [MessageService]
})
export class RegisterUserComponent {
  reactiveForm:any;
  constructor(private builder:FormBuilder,private service:RegisterService,private router:Router,private messageService: MessageService){
    this.reactiveForm=builder.group({
      username:[],
      email:[],
      // password:[]
    })
  }
  ngOnInit() {}

   registerUser(){
    this.service.registerUser(this.reactiveForm.value).subscribe(async(res:any)=>{
      console.log(res,"res");
      if(res.status){
        // this.messageService.add({severity:'success', summary: 'Success', detail: res.message});
        // await this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: res.message});
        this.router.navigate(['verifyUser']);
      }else{
        // this.messageService.add({severity:'error', summary: 'Error', detail: res.message});
         this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: res.message});
      }

    })
  }
}
