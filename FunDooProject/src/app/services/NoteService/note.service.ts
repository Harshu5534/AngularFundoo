import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { AnimationStyleMetadata } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpService) {
    
    this.token = localStorage.getItem('token');
  }
  createnotes(reqData: any) {
    this.token = localStorage.getItem('token');
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
    this.token = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    console.log(httpOptions)
    return this.httpService.getService(`Note/AllNotes`, true, httpOptions)
  }
  updatenotes(data:any,noteid:any) {
    this.token = localStorage.getItem('token');
    console.log(data);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.putservice(`Note/Update?noteid=`+noteid, data, true, header)
  }
  delete(noteid:any){
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),
      body:{noteId:noteid}
    }
    return this.httpService.deleteService(`Note/Delete?noteid=`+noteid,true,header)
  }
  archivenotes(noteid: any) {
    this.token = localStorage.getItem('token');
    console.log(noteid)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      }),
      body: { noteId:noteid }
    }
    return this.httpService.putservice(`Note/Archive?noteid=`+noteid,{ } ,true, header)
  }
  ColorNote(data:any,noteid:any,color:any){
    this.token = localStorage.getItem('token');
    console.log(noteid);
  console.log(data);
    let header = {
      headers: new HttpHeaders({    
        'Content-Type': 'application/json',
        'Authorization' : 'bearer ' + this.token,
      }),
    };
    return this.httpService.putservice('Note/Color?noteid='+noteid+'&color='+color,data,true, header);
  }
}