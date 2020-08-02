import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from "@angular/router";
import {UsersService} from "../../users.service";

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {


  myForm : FormGroup;
  responseMessage: any;
  responseBool: any;


  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router) {
    this.myForm = formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      username : [Validators.minLength(3), [Validators.required]],
      password: [Validators.minLength(6),  Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
      this.usersService.createUsers(this.myForm.value).subscribe((r: any) => {
      console.log(r)
      if (r.success) {
         this.responseMessage = r.message;
          this.responseBool = r.success
      } else {
        this.responseMessage = r.message;
        this.responseBool = r.success
      };
    });
    setTimeout(() => {
      this.myForm.reset();
    }, 300)

    setTimeout(() => {
        this.router.navigate(['/login'])
    }, 1200)
  }
}
