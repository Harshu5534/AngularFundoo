import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/UserService/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  RegisterForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
  constructor(private formBuilder: FormBuilder, private user: UserService,) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Confirm: ['', Validators.required]
    });
  }
  Registration() {
    if (this.RegisterForm.valid) {
      console.log(this.RegisterForm.valid)
      let reqdata = {
        firstName: this.RegisterForm.value.FirstName,
        lastName: this.RegisterForm.value.LastName,
        email: this.RegisterForm.value.email,
        password: this.RegisterForm.value.password,
      }
      this.user.RegistrationUserService(reqdata).subscribe((response: any) => {
        console.log("Register successful", response);
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }
  }
  ShowPassword() {
    this.hide = !this.hide;
  }
}