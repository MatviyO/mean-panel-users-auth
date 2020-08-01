import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "../modules/home/home.component";
import {AboutComponent} from "../modules/about/about.component";
import {LayoutComponent} from "./layout.component";
import {RegistrComponent} from "../modules/users/registr/registr.component";
import {LoginComponent} from "../modules/users/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "../modules/users.service";



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LayoutComponent,
    RegistrComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersService]
})
export class LayoutModule { }
