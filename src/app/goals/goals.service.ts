import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Goal } from './Goal';

@Injectable()
export class GoalsService {

  constructor(private http: HttpClient) { }

  getGoals(userId: number): Observable<Goal[]> {
    return this.http.get<Goal[]>('http://localhost:8080/loggedInUserId/'+userId+'/goals');
  }
}
