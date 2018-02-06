import { Component, OnInit, Input } from '@angular/core';
import { DiaryPage } from './DiaryPage';
import { DiariesService } from './diaries.service';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';

@Component({
  selector: 'app-diaries',
  templateUrl: './diaries.component.html',
  styleUrls: ['./diaries.component.css']
})
export class DiariesComponent implements OnInit {

  public diaries: DiaryPage[];
  @Input() public userId: number;

  constructor(private service: DiariesService) { }

  ngOnInit() {
    this.getDiariesFromService();
  }

  getDiariesFromService() {
    this.service.getDiaries(this.userId).subscribe(diaries => {
      this.diaries = diaries;
    },
  error => {
    console.log(JSON.stringify(error));
    
  })
  }

}
