import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  NotesList:any;
  constructor(private noteservice:NoteService) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.noteservice.getallnotes().subscribe((response:any)=>{
      console.log('Allnotes',response);
      this.NotesList=response
      //console.log(this.NotesList);
    })
  }
}
