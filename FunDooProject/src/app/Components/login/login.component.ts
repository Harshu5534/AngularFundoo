import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLinkActive } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService,private router:Router) { }

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
      Emailorphone: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    if (this.loginForm.valid) {

      let reqData = {
        Email: this.loginForm.value.Emailorphone,
        Password: this.loginForm.value.Password
      }
      this.user.loginUserService(reqData).subscribe((response: any) => {
        console.log("Login successfully",response);
        localStorage.setItem("token",response.response)
        this.router.navigate(["/dashboard/note"])
      }, (error: any) => {
        console.log(error);
      });
    }
    else{
      return;
    }
  }
}


