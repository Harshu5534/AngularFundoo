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
  isArchieveComponent = false;
  colorarray = [{ Colorcode: "red" }, { Colorcode: "pink" }, { Colorcode: "blue" }, { Colorcode: "yellow" },
  { Colorcode: "purple" }, { Colorcode: "white" }, { Colorcode: "grey" }, { Colorcode: "orange" },
  { Colorcode: "nevyblue" }, { Colorcode: "brown" }];
  // colorarray = [{ Colorcode: "#ffffff" }, { Colorcode: "#FF6347" }, { Colorcode: "#FF4500" }, { Colorcode: "#FFFF00" },
  // { Colorcode: "#ADFF2F" }, { Colorcode: "#43C6DB" }, { Colorcode: "#728FCE" }, { Colorcode: "#2B65EC" },
  // { Colorcode: "#D16587" }, { Colorcode: "#F9A7B0" }, { Colorcode: "#E2A76F" }, { Colorcode: "#D3D3D3" }, { Colorcode: "#ffff66" },
  // { Colorcode: "#008040" }, { Colorcode: "#669999" }, { Colorcode: "#ffa64d" }];
  constructor(private noteservice: NoteService, private snackBar: MatSnackBar, private route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.noteobj)
    let comp = this.route.snapshot.component;

    if (comp == DisplayNotesComponent) {
      this.isDisplayNoteComponent = true;
    }

    if (comp == ArchivenotesComponent) {
      this.isArchieveComponent = true;
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
    let data = {
      color: color,
      noteid: this.noteobj.noteId
    };
    console.log(data)
    // console.log('Note is colored');
    this.noteservice.ColorNote(data, this.noteobj.noteId, color).subscribe((res: any) => {
      console.log('Color note :', res);
      this.messageTrashtoDisplay.emit(res);
      this.snackBar.open('Color note successfully', '', {
        duration: 3000,
      })
    });
  }
}
