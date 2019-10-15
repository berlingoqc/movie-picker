import { Account, MovieList } from 'src/app/moviedb/model';
import { Component, OnInit } from '@angular/core';

import { AccountAPI } from 'src/app/moviedb/api/account';
import { MoviePickerService } from 'src/app/moviedb/service/movie-picker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-picker',
  templateUrl: './movie-picker.component.html',
  styleUrls: ['./movie-picker.component.scss']
})
export class MoviePickerComponent implements OnInit {
  account: Account;

  yourLists: MovieList[];

  constructor(public accountAPI: AccountAPI, public moviePickerService: MoviePickerService) {
    this.accountAPI.getDetails().subscribe(x => {
      this.account = x;
    });
  }

  ngOnInit() {}
}
