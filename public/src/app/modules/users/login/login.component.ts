import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {UsersService} from "../../users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm : FormGroup;
  responseMessage: any;
  responseBool: any;


  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router) {
    this.myForm = formBuilder.group({
      username : [Validators.minLength(3), [Validators.required]],
      password: [Validators.minLength(6),  Validators.required]
    });
  }

  ngOnInit() {
  }
  async onSubmit(){
    await this.usersService.getAuthentication(this.myForm).subscribe((r: any) => {
      console.log(r)
      if (r.success) {
        this.responseMessage = r.message;
        this.responseBool = r.success
      } else {
        this.responseMessage = r.message;
        this.responseBool = r.success
      };
    });
    this.myForm.reset();
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 1200)
  }

}
