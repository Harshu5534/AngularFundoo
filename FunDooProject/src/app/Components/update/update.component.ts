import { Component, OnInit,Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/NoteService/note.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() updatedisplay = new EventEmitter<any>();  //this is child to parent sharing using two way binding data where we use output decorator (child component.ts)
  title:any;
  description:any;
  noteId:any;
  color:any;
  constructor(private note: NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

    onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
    this.noteId=this.data.noteId,
    this.title = this.data.title,
    this.description = this.data.description
    this.color=this.data.color
    }

  Updatenotes() {
    let data = {
      noteid: this.data.noteId,
      title: this.title,
      description: this.description,
      // reminder: "2022-08-16T18:13:51.839Z",
      color: this.color
      // image: "img.jpeg",
      // isArchived: true,
      // isPinned: true,
      // isDeleted: true,
      // createdAt: "2022-08-16T18:13:51.839Z",
      // editedAt: "2022-08-16T18:13:51.839Z"
    }

    this.note.updatenotes(data,this.noteId).subscribe((response: any) => {
      console.log(response)
      this.onNoClick();
      this.updatedisplay.emit(response)
    })
    this.dialogRef.close("update note successfully");
  }
  getcolornote(event:any){
    console.log(event);
    this.color=event;
  }

}


