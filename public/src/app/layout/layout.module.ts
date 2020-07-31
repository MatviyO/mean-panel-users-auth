import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "../modules/home/home.component";
import {AboutComponent} from "../modules/about/about.component";
import {LayoutComponent} from "./layout.component";



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }
