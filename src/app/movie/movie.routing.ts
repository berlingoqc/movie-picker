import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './page/login/login.component';
import { LoginGuard } from './../moviedb/guard/login.guard';
import { MovieComponent } from './movie.component';
import { MoviePickerComponent } from './page/movie-picker/movie-picker.component';
import { NgModule } from '@angular/core';

const route: Routes = [
  {
    path: 'movie',
    component: MovieComponent,
    canActivateChild: [LoginGuard],
    children: [
      {
        path: '',
        component: MoviePickerComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class MovieRoutingModule {}
