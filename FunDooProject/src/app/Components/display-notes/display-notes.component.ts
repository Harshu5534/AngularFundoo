import { Component,Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
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
 @Input() NoteArray:any;

  notedata:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('Allnotes',this.NoteArray);
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
    this.noteId=response;
    console.log(response);
    })
  }
}
