import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-getpass',
  templateUrl: './getpass.component.html',
  styleUrls: ['./getpass.component.css']
})
export class GetpassComponent {
  constructor(private fb: FormBuilder, private service: RegisterService, private router: Router, private messageService: MessageService) { }

  reactiveForm = this.fb.group({
    password: [, [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/')]]
  })

  ngOnInit() { }

  createAccount() {
    this.reactiveForm.reset();

    let token = localStorage.getItem('token');

    let body = { password: this.reactiveForm.value["password"], token: token }

    this.service.addPassword(body).subscribe((res: any) => {
      if (res.status) {
        this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: res.message });
        this.router.navigate(['login'])
      } else {
        this.messageService.add({ key: 'tc', severity: 'error', summary: 'Error', detail: res.message });
      }
    })

    localStorage.clear();
  }
}
