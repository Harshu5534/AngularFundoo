import { Component,Input,EventEmitter,Output, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DataServiceService } from 'src/app/services/DataService/data-service.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  title:any;
  description:any;
  noteId:any;
  msg:any;
  filteredString = '';
  searchString: any;
  subscription: any;
  message: any;
 @Input() NoteArray:any;
 @Output() colornote = new EventEmitter<any>(); 
 @Output() messageDisplaytoGetAllnotes = new EventEmitter<string>();
 constructor(public dialog: MatDialog,private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.dataservice.searchNote.subscribe(message => {
      this.message = message;
      
      this.searchString = message.data[0];
    })
  }
  openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateComponent,{
      width: '45%',
      height: 'auto',
      data:note,
    });
    dialogRef.afterClosed().subscribe((response:any)=>{
    this.title=response;
    this.description=response;
    this.messageDisplaytoGetAllnotes.emit(response);
    this.noteId=response;
    console.log(response);
    })
  }
  receivemessageTrashtoDisplay($event: any) {
    console.log("event from icon to display", $event)
    this.msg = $event;
    console.log("msg", this.msg);

    this.messageDisplaytoGetAllnotes.emit(this.msg)
  }
 
  //this is for archive note nd trash
  getcolornote(event:any){
    this.colornote.emit(event);
  }
}
