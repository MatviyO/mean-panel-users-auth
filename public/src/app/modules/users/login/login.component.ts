import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../shared/services/users.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  myForm: FormGroup;
  responseMessage: any;
  responseBool: any;
  @Input() authLogginTrue;
  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router, private authService: AuthService) {
    this.myForm = formBuilder.group({
      username : [Validators.minLength(3), [Validators.required]],
      password: [Validators.minLength(6),  Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.usersService.getAuthentication(this.myForm.value).subscribe((r: any) => {
      console.log(r);
      this.usersService.authToken(r.token, r.user);
      this.authService.login();

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
    }, 2000)

  }
}
