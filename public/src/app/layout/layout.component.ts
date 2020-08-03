import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  authLogginTrue: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authLogginTrue = this.authService.isLoggedIn()
    console.log(this.authLogginTrue)
  }

}
