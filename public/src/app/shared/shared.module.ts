import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";
import {UsersService} from "./services/users.service";
import {AuthService} from "./services/auth.service";
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [UsersService, AuthService]

})
export class SharedModule { }
