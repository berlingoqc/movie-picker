import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListDetails, MovieList } from 'src/app/moviedb/model';

import { AccountAPI } from './../../../moviedb/api/account';
import { ListsAPI } from 'src/app/moviedb/api/lists';
import { MoviePickerService } from 'src/app/moviedb/service/movie-picker.service';

@Component({
  selector: 'app-movie-lists-list',
  templateUrl: './movie-lists-list.component.html',
  styleUrls: ['./movie-lists-list.component.scss']
})
export class MovieListsListComponent implements OnInit {
  @Input() accountID: number;

  newListID: number;

  constructor(private accountAPI: AccountAPI, public pickerService: MoviePickerService) {}

  ngOnInit() {
    this.accountAPI.getCreatedLists(this.accountID).subscribe(lists => {
      this.pickerService.addMovieFromList(lists.results.map(x => x.id));
    });
  }

  appendNewLists() {
    if (this.newListID) {
      this.pickerService.addMovieFromList([this.newListID]);
    }
  }
}
