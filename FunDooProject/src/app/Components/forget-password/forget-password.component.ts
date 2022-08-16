import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  Forgetpassword!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.Forgetpassword = this.formBuilder.group({
      EmailOrPhoneNumber: ['', Validators.required],
    });
  }
  ForgetPassword() {
    if (this.Forgetpassword.valid) {
      let reqdata = {
        email: this.Forgetpassword.value. EmailOrPhoneNumber,

      }
      this.user.ForgetPasswordUserService(reqdata).subscribe((response: any) => {
        console.log(response);
      }, (error: any) => {
        console.log(error);

      })
    }
    else {
      return;
    }

  }
}