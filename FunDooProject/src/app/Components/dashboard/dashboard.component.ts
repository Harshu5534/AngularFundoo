import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from 'src/app/services/DataService/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 200;
  mobileQuery: MediaQueryList;
  value:any

  constructor(media: MediaMatcher,private route: Router,private snackBar: MatSnackBar,private dataService: DataServiceService) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  snavToggle() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen) {
        this.contentMargin = 50;
      }
      else {
        this.contentMargin = 400;
      }
    }
    Logout() {
      localStorage.removeItem('token');
      this.route.navigateByUrl('/login');
      this.snackBar.open('Logged out Successful..','',{
        duration:2000,verticalPosition:'bottom',horizontalPosition:'left'
      })
    }
    searchTitle(event: any) {
      console.log("input in search field===", event.target.value);
      this.value = event.target.value
      let data = {
        type: 'search',
        data: [this.value]
      }
      this.dataService.changeData(data)
    }

  ngOnInit(): void {
  }
  notes() {
    this.route.navigateByUrl('dashboard/note');
  }
  Archive() {
    this.route.navigateByUrl('dashboard/archivenotes')
  }
  Trash() {
    this.route.navigateByUrl('dashboard/trash')
  }

}