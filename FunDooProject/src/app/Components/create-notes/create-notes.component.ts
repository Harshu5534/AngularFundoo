import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/NoteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  show=false;
  createnoteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private note: NoteService) { }

  

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]

    });
  }
  onOpen() {
    this.show = true;
  }
  onSubmit() {
    this.show = false;

    if (this.createnoteForm.valid) {
      let reqData = {
        title: this.createnoteForm.value.title,
        description: this.createnoteForm.value.description,
        reminder: "2022-08-12T05:06:06.037Z",
        color: "string",
        image: "string",
        isArchived: true,
        isPinned: true,
        isDeleted: true,
        createdAt: "2022-08-12T05:06:06.037Z",
        editedAt: "2022-08-12T05:06:06.037Z"

      }
      this.note.createnotes(reqData).subscribe((response: any) => {
        console.log("Create note successfully", response);
        localStorage.setItem("token",response.response)
      }, (error: any) => {
        console.log(error);
      })
    } else {
      return;
    }
  }
}