import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DiaryPage } from './DiaryPage';

@Injectable()
export class DiariesService {

  constructor(private http: HttpClient) { }

  getDiaries(userId: number): Observable<DiaryPage[]> {
    return this.http.get<DiaryPage[]>('http://localhost:8080/loggedInUserId/'+userId+'/diaryPages');
  }
}
