 import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  archiveNotes:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getArchiveList()
  }
  getArchiveList() {
    this.note.getallnotes().subscribe((response: any) => {
      console.log('All Notes',response);
      this.archiveNotes = response;
      this.archiveNotes.reverse();
      this.archiveNotes=this.archiveNotes.filter((object:any)=>{
        return object.isArchived===true;
      })
      // this.archiveNotes=this.archiveNotes
      // console.log(this.archiveNotes)
        
      });
    }
    recieveArchiveNote(event:any){
      console.log(event)
      this.getArchiveList()
    }
  }
