import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
 @Input() NoteArray:any;
  constructor() { }

  ngOnInit(): void {
    console.log('Allnotes',this.NoteArray);
  }

}
