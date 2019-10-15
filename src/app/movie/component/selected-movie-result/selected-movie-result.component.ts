import { Component, OnInit } from '@angular/core';

import { MoviePickerService } from 'src/app/moviedb/service/movie-picker.service';

@Component({
  selector: 'app-selected-movie-result',
  templateUrl: './selected-movie-result.component.html',
  styleUrls: ['./selected-movie-result.component.scss']
})
export class SelectedMovieResultComponent implements OnInit {
  constructor(public moviePicker: MoviePickerService) {}

  ngOnInit() {}

  clickWatch() {}
}
