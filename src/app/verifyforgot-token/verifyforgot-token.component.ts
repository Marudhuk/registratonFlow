import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-verifyforgot-token',
  templateUrl: './verifyforgot-token.component.html',
  styleUrls: ['./verifyforgot-token.component.css']
})
export class VerifyforgotTokenComponent {

  visible = true;

  constructor(private activatedRoute: ActivatedRoute, private service: RegisterService, private router: Router) { }

  ngOnInit() {
    let token = this.activatedRoute.snapshot.paramMap.get('token');
    if (token) {
      this.service.verifyForgotToken(token).subscribe((data: any) => {
        if (data.status) {
          this.visible = true;
          localStorage.setItem("token", data.data)
        }
      })
    }
  }

  onSubmit() {
    this.router.navigate(['resetPassword']);

  }

}
