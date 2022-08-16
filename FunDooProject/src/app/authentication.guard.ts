import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/AuthService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(public AuthService:AuthService,public router: Router){}
  canActivate():boolean{
    if(!this.AuthService.gettoken()){
      this.router.navigateByUrl("/login");
    }
    return this.AuthService.gettoken();
  }
}
  

