import {Component, OnInit} from '@angular/core';
import {User} from "../_models/user";
import {Router} from '@angular/router';
import {LoginService} from "../_services/login.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  user: User = new User();

  ngOnInit() {
  }


  onSubmit(user: User) {
    this.loginService.login(user.email, user.password);
  }

}
