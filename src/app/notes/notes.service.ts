import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Note } from './Note';


@Injectable()
export class NotesService {

  constructor(private http: HttpClient) {  }

  getNotes(userId: number): Observable<Note[]> {
    return this.http.get<Note[]>('http://localhost:8080/loggedInUserId/'+userId+'/notes');
  }
}
