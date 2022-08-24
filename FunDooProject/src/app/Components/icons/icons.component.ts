import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/NoteService/note.service';
import { ArchivenotesComponent } from '../archivenotes/archivenotes.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteobj: any; 
  @Output() messageTrashtoDisplay = new EventEmitter<string>();
  noteId: any;
  isDisplayNoteComponent = false;
  isArchieved = false;
  colorarray = [{ Colorcode: "Cyan" }, { Colorcode: "Pink" }, { Colorcode: "OrangeRed" }, { Colorcode: "Yellow" },
  { Colorcode: "DeepSkyBlue" }, { Colorcode: "MediumVioletRed" }, { Colorcode: "Silver" }, { Colorcode: "Orange" },
  { Colorcode: "Tomato" }, { Colorcode: "Magenta" },{ Colorcode: "LimeGreen" },{ Colorcode: "RosyBrown" }];
  constructor(private noteservice: NoteService, private snackBar: MatSnackBar, private route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.noteobj)
    let comp = this.route.snapshot.component;

    if (comp == DisplayNotesComponent) {
      this.isDisplayNoteComponent = true;
    }

    if (comp == ArchivenotesComponent) {
      this.isArchieved = true;
    }

  }
  delete() {
    this.noteservice.delete(this.noteobj.noteId).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.messageTrashtoDisplay.emit(response);
      this.snackBar.open('Note deleted successfully!!!', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    })
  }
  Archivenote() {
    this.noteservice.archivenotes(this.noteobj.noteId).subscribe((response: any) => {
      // console.log(this.noteobj.noteId)
      console.log("Note Successfully archived", response);
      this.messageTrashtoDisplay.emit(response);
      this.snackBar.open('Note Archived Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    })
  }
  unArchivenote() {
    this.noteservice.archivenotes(this.noteobj.noteId).subscribe((response: any) => {
      // console.log(this.noteobj.noteId)
      console.log("Note Successfully unarchived", response);
      this.messageTrashtoDisplay.emit(response);
      this.snackBar.open('Note Archived Successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'left'
      })
    })
  }
  ColorNote(color: any) {
    // console.log(this.noteobj);
    // this.noteobj.colour = colour;
    // console.log('Note is colored');
    this.noteservice.ColorNote(this.noteobj.noteId, color).subscribe((res: any) => {
      console.log('Color note :', res);
      this.messageTrashtoDisplay.emit(res);
      this.snackBar.open('Color note successfully', '', {
        duration: 3000,
      })
    });
  }
}
