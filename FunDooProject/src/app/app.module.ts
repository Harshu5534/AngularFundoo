import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from './services/AuthService/auth.service';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { UpdateComponent } from './Components/update/update.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { SearchfilterPipe } from './Pipes/searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    CreateNotesComponent,
    DisplayNotesComponent,
    GetAllNotesComponent,
    IconsComponent,
    ArchivenotesComponent,
    UpdateComponent,
    SearchfilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
