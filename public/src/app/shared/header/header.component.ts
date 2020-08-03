import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  user: any;
  mass: any;
  username = ''
  @Input() authLogginTrue;
  constructor(private authService: AuthService,
              private usersService: UsersService,
              private router: Router
  ) { }

  ngOnInit() {
    this.user = this.usersService.getAuthToken();
    console.log(this.user)
    this.mass = this.user[1]
    this.username = this.mass.username;
    if (this.user[0]) {
      this.authLogginTrue = !this.authLogginTrue;
    }


  }


  logOut() {
    this.authService.logout()
    this.authLogginTrue = !this.authLogginTrue;
    setTimeout(() => {
      this.router.navigate(['/login'])
    },100)
  }

}
