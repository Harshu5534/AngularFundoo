import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  NotesList:any;
  message: any; 
  public subscription: any; 
  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.noteservice.getallnotes().subscribe((response:any)=>{
      console.log(response);
      console.log('Allnotes',response);
      this.NotesList=response
      this.NotesList.reverse();
      //console.log(this.NotesList);
      this.NotesList=this.NotesList.filter((object:any)=>{
        return object.isArchived===false
      })
    });
  }
  receiveMessage($event:any) {
    console.log($event);
    this.GetAllNotes()
}
recieveArchiveNote(event :any){
  console.log(event);
  this.GetAllNotes();
}
  receivemessageDisplaytoGetAllnotes($event: any) {

    this.GetAllNotes()
  }
}
