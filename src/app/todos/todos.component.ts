import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodosService } from './todos.service';
import { Todo } from './Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public todos: Todo[];
  @Input() public userId: number;

  constructor(private service: TodosService) { }

  ngOnInit() {
    this.getTodosFromService();
  }

  getTodosFromService() {
    this.service.getTodos(this.userId).subscribe(todos => {
      this.todos = todos;
    },
  error => {
    console.log(JSON.stringify(error));
  })
  }

}
