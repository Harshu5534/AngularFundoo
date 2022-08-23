import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { AuthenticationGuard } from './authentication.guard';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';

const routes: Routes = [
  {path:'', redirectTo:"/login", pathMatch:'full' },
  {path:'login',component:LoginComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'Resetpassword',component:ResetPasswordComponent},
  {path:'ForgetPassword',component:ForgetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    { path:'', redirectTo:"note", pathMatch:'full' },
    { path:'note',component:GetAllNotesComponent},
    { path:'archivenotes',component:ArchivenotesComponent}, 
  ]},
  { path:'icons',component:IconsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
