import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;

  constructor(private httpService:HttpService) { }
  //login api session
  loginUserService(reqData: any){
    console.log(reqData);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json-patch+json',
        'Authorization':this.token
      }),
    };
    return this.httpService.postservice(`User/Login`,reqData,false,header);
  }
  //Registration api session
  RegistrationUserService(reqData:any){
    console.log(reqData);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json-patch+json',
      }),
    };
    return this.httpService.postservice(`User/Register`,reqData,false,header);
  }
  //Forget Password api session
  ForgetPasswordUserService(reqdata: any){
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      }),
    };
    return this.httpService.postservice(`User/Forget?email=${reqdata.email}`,reqdata,false,header);
  }
  ResetPasswordUserService(reqdata: any){
    console.log(reqdata);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization':this.token
      }),
    };
    return this.httpService.postservice(`User/Reset`,reqdata,true,headerOption);
  }
}
  

