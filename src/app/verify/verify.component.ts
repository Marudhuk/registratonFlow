import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  visible=false;

  constructor(private activatedRoute:ActivatedRoute,private service:RegisterService,private router:Router,private messageService:MessageService) { }

  ngOnInit() {
    let token=this.activatedRoute.snapshot.paramMap.get('token');
    this.service.verifyEmail(token).subscribe((res:any)=>{
      if(res.status){
        
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: res.message});
        
        this.visible=true;
        localStorage.setItem("token",res.data)
      }      
    })
  }

  routeToPassword(){
    this.router.navigate(['getPassword']); 
  }
}
