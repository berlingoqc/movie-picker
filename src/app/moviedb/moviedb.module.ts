import { AccountAPI } from './api/account';
import { AuthenticationAPI } from './api/login';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListsAPI } from './api/lists';
import { LoginService } from './service/login.service';
import { MovieAPI } from './api/movie';
import { MoviePickerService } from './service/movie-picker.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [AccountAPI, AuthenticationAPI, ListsAPI,MovieAPI, LoginService, MoviePickerService]
})
export class MoviedbModule {
  constructor() {}
}
