import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 200;
  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher,private route: Router) { 
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
    }

  ngOnInit(): void {
  }

}