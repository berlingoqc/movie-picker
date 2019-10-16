import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DialogFindMovieComponent } from './../../dialog/dialog-find-movie/dialog-find-movie.component';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/moviedb/model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() movies: Movie[];

  @Input() optionAddMovie = false;
  @Input() optionSelectable = false;
  @Input() optionDelete = true;
  @Input() optionDetail = true;
  @Input() optionFind = true;


  @Output() addMovie = new EventEmitter<Movie>();

  constructor(private matDialog: MatDialog) {}

  ngOnInit() {}

  removeItem(id: number) {
    this.movies = this.movies.filter(x => x.id !== id);
  }

  showDetail(id: number) {}

  showFindMovie(id: number) {
    const dialogRef = this.matDialog.open(DialogFindMovieComponent, {
      width: '400px',
      data: this.movies.find(x => x.id === id)
    });
  }
}
