import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Todo } from './Todo';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8080/loggedInUserId/'+userId+'/todos')
  }
}
