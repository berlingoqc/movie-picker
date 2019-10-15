import { Component, OnInit } from '@angular/core';

import { Movie } from './../../../moviedb/model/movie';
import { MoviePickerService } from 'src/app/moviedb/service/movie-picker.service';

@Component({
  selector: 'app-selected-movies-list',
  templateUrl: './selected-movies-list.component.html',
  styleUrls: ['./selected-movies-list.component.scss']
})
export class SelectedMoviesListComponent implements OnInit {
  numberElementDisplay = 10;
  index = 0;
  constructor(public moviePicker: MoviePickerService) {}

  ngOnInit() {}

  getData(): Movie[] {
    console.log('INDEX ' + this.index);
    return this.moviePicker.selectedMovies.slice(this.index, this.index + this.numberElementDisplay);
  }

  next() {
    if (this.index + this.numberElementDisplay < this.moviePicker.selectedMovies.length) {
      this.index += this.numberElementDisplay;
    }
  }

  previous() {
    this.index -= this.numberElementDisplay;
    if (this.index < 0) {
      this.index = 0;
    }
  }
}
