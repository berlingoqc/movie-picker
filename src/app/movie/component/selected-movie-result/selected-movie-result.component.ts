import { AvailabilityMoviesService, MovieAvailability } from './../../service/MissingMovies';
import { Component, OnInit } from '@angular/core';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MoviePickerService } from 'src/app/moviedb/service/movie-picker.service';
import { WatchMovieBottomSheetComponent } from '../watch-movie-bottom-sheet/watch-movie-bottom-sheet.component';

@Component({
  selector: 'app-selected-movie-result',
  templateUrl: './selected-movie-result.component.html',
  styleUrls: ['./selected-movie-result.component.scss']
})
export class SelectedMovieResultComponent implements OnInit {
  available: MovieAvailability;

  constructor(
    public moviePicker: MoviePickerService,
    private availabilityService: AvailabilityMoviesService,
    private bottomSheet: MatBottomSheet) {
    this.moviePicker.randomMovieChange.asObservable().subscribe(x => {
      this.available = this.availabilityService.movies.find(m => m.movie && m.movie.id === x.id );
    });
  }

  ngOnInit() {}

  clickWatch() {
    this.bottomSheet.open(WatchMovieBottomSheetComponent, {data: this.available});
  }
}
