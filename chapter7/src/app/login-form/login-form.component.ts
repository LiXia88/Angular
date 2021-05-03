import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(
      "Trying to log in through '" + this.username +
      "'and'" + this.password + "'"
    );
    if(this.username == 'LiXia' && this.password == "mysecret"){
      this.router.navigate(['heroes'])
    }
  }

}
