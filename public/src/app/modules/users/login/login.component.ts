import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
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
  onSubmit() {
    console.log(this.myForm)
    this.usersService.getAuthentication(this.myForm.value).subscribe((r: any) => {
      console.log(r)
      if (r.success) {
        this.responseMessage = r.message;
        this.responseBool = r.success
      } else {
        this.responseMessage = r.message;
        this.responseBool = r.success
      }
      ;
    });
    setTimeout(() => {
      this.myForm.reset();
    }, 300)

    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 1200)

  }
}
