import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./modules/home/home.component";
import {AboutComponent} from "./modules/about/about.component";
import {LoginComponent} from "./modules/users/login/login.component";
import {RegistrComponent} from "./modules/users/registr/registr.component";
import {ProfileComponent} from "./modules/profile/profile.component";

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [{
      path: '',
      component: HomeComponent
    },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'register', component: RegistrComponent
      },
      {
        path: 'login', component: LoginComponent
      }

    ]
  },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
