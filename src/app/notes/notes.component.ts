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
<<<<<<< HEAD
      this.notes.forEach(element => {
//        element.stringReminderTime = element.reminderTimeToString();
        let result: string = '';
        if (element.reminderTime == null) {
            result = '';
        } else {
            //console.log(element.reminderTime);
            result = result + element.reminderTime.getDay + '.' + element.reminderTime.getMonth + '.' +
            element.reminderTime.getFullYear + ' ' + element.reminderTime.getHours + ':' + element.reminderTime.getMinutes;
        }
        //console.log(result);
        element.stringReminderTime = result;
      });
=======
>>>>>>> 3affc7ed849e4ae06848fa7a75f0a7798e021056
    },
  error => {
    console.log(JSON.stringify(error));
  })
  }



}
