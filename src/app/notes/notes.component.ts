import { Component, OnInit, Input } from '@angular/core';
import { Note } from './Note';
import { NotesService } from './notes.service';
import { Observable } from 'rxjs/Observable';
 
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notes: Note[];
  @Input() public userId: number;

  constructor(private service: NotesService) { }

  ngOnInit() {
    this.getNotesFromService();
  }

 getNotesFromService() {
    this.service.getNotes(this.userId).subscribe(notes => {
      this.notes = notes;
    },
  error => {
    console.log(JSON.stringify(error));
  })
  }



}
