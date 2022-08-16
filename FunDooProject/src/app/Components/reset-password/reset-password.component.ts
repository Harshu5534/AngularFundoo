import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  Resetpassword!: FormGroup;
  submitted = false;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.Resetpassword = this.formBuilder.group({
      password: ['', [Validators.required,Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ResetPassword() {
    //console.log("filled data", this.Resetpassword .value);
    if (this.Resetpassword.valid) {

      let reqData = {
        confirmPassword: this.Resetpassword.value.ConfirmPassword,
        password: this.Resetpassword.value. password
      }
      this.user.ResetPasswordUserService(reqData).subscribe((response: any) => {
        console.log("Reset Password successfully",response);
      }, (error: any) => {
        console.log(error);
      });
    }
    else{
      return;
    }
  }
  ShowPassword() {
    this.hide = !this.hide;
  }

}
