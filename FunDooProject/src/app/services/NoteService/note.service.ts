import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpService) {
    
    this.token = localStorage.getItem('token');
  }
  createnotes(reqData: any) {
    console.log(reqData);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.postservice(`Note/Add`, reqData, true, httpOptions)
  }
  getallnotes() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService(`Note/AllNotes`, true, httpOptions)
  }
}