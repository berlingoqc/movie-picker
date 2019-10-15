import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Movie } from 'src/app/moviedb/model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() movies: Movie[];

  @Input() optionSelectable = false;
  @Input() optionDelete = true;
  @Input() optionDetail = true;
  @Input() optionFind = true;

  constructor() {}

  ngOnInit() {}

  removeItem(id: number) {
    this.movies = this.movies.filter(x => x.id !== id);
  }

  showDetail(id: number) {}

  showFindMovie(id: number) {}
}
