import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./modules/home/home.component";
import {AboutComponent} from "./modules/about/about.component";

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [{
      path: '',
      component: HomeComponent
    },
      {
        path: 'about', component: AboutComponent
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
