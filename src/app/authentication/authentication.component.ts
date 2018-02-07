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

  public loginFailed: boolean = false;

  @Output() eventEmiter: EventEmitter<number> = new EventEmitter<number>();
  
  @Input() public loginData: Login = new Login("", "");

  constructor(private service: AuthenticationService) { }

  ngOnChanges() {
  }

  get vypisLoginData() {
    return JSON.stringify(this.loginData);
  }

  loginUser() {
    this.service.authenticate(this.loginData).subscribe(userId => {
      this.loginFailed = true;
      this.loginFailed = userId == -1;
      this.eventEmiter.emit(userId);
    },
      error => {
        this.loginFailed = true;
        console.log("Problem has occured: " + JSON.stringify(error));
    })
  }
}
