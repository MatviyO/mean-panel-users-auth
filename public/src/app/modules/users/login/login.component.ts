import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm1: FormGroup;


  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.myForm1 = formBuilder.group({
      username : [Validators.minLength(3), [Validators.required]],
      password: [Validators.minLength(6),  Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
     this.usersService.getAuthentication(this.myForm1).subscribe(r => console.log(JSON.stringify(r)));
    this.myForm1.reset();
  }
}
