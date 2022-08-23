import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable()
  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  private searchData = new BehaviorSubject({ type:'',data:[]});
  searchNote = this.searchData.asObservable()
  changeData(message:any){
    this.searchData.next(message)
    
    
  }
}
