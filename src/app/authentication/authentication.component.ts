import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Login } from './Login';
import { AuthenticationService } from './authentication.service';
import { error } from 'util';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnChanges {

  private userId: number;

  @Output() eventEmiter: EventEmitter<number> = new EventEmitter<number>();
  
  @Input() public loginData: Login = new Login("", "");

  constructor(private service: AuthenticationService) { }

  ngOnChanges() {
  }

  get vypisLoginData() {
    return JSON.stringify(this.loginData);
  }

  loginUser() {
    this.service.authenticate(this.loginData).subscribe(number => {
      this.userId = number;
      this.service.userId = number;
      //console.log(this.userId);
      this.eventEmiter.emit(this.userId);
    },
      error => {
        console.log("Problem has occured: " + JSON.stringify(error));
    })
  }
}
