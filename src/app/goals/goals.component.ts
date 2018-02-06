import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GoalsService } from './goals.service';
import { Goal } from './Goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  public goals: Goal[];
  @Input() public userId: number;

  constructor(private service: GoalsService) { }

  ngOnInit() {
    this.getGoalsFromService();
  }

  getGoalsFromService() {
    this.service.getGoals(this.userId).subscribe(goals => {
      this.goals = goals;
    }, error => {
      console.log(JSON.stringify(error));
    })
  }

}
