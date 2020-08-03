import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {UsersService} from "../../shared/services/users.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  mass: any;
  username = ''
  email = ''
  password = ''
  constructor(private authService: AuthService,
              private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.usersService.getAuthToken();
    console.log(this.user)
    this.mass = this.user[1]
    this.username = this.mass.username;
    this.email = this.mass.email;
    this.password = this.mass.password;
  }
}
