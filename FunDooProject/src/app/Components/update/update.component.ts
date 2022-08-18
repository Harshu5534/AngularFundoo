import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/NoteService/note.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title:any;
  description:any;
  noteId:any;
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
    }

  Updatenotes() {
    let data = {
      noteid: this.data.noteId,
      title: this.title,
      description: this.description,
      // reminder: "2022-08-16T18:13:51.839Z",
      // color: "blue",
      // image: "img.jpeg",
      // isArchived: true,
      // isPinned: true,
      // isDeleted: true,
      // createdAt: "2022-08-16T18:13:51.839Z",
      // editedAt: "2022-08-16T18:13:51.839Z"
    }

    this.note.updatenotes(data,this.noteId).subscribe((response: any) => {
      console.log(response)
    })
    this.dialogRef.close("update note successfully");
  }

}


