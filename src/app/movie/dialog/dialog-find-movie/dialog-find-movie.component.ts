import { Observable } from 'rxjs';
import { MovieAPI } from './../../../moviedb/api/movie';
import { Movie, List } from 'src/app/moviedb/model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContextService } from 'src/app/moviedb/moviedb.context';
import { MoviePickerService } from 'src/app/moviedb/service/movie-picker.service';

@Component({
  selector: 'app-dialog-find-movie',
  templateUrl: './dialog-find-movie.component.html',
  styleUrls: ['./dialog-find-movie.component.scss']
})
export class DialogFindMovieComponent implements OnInit {
  selectionMovies: Movie[];

  selection: 'recommendation' | 'similar';

  constructor(
    private movieAPI: MovieAPI,
    public dialogRef: MatDialogRef<DialogFindMovieComponent>,
    public moviePicker: MoviePickerService,
    @Inject(MAT_DIALOG_DATA) public movie: Movie) { }

  ngOnInit() {
    console.log(this.movie);
    this.updateList('recommendation');
  }


  updateList(selection: 'recommendation' | 'similar') {
    this.selection = selection;
    let obsMovies: Observable<List<Movie>>;
    switch (this.selection) {
      case 'recommendation':
        obsMovies = this.movieAPI.getMovieRecommendation(this.movie.id);
        break;
      case 'similar':
        obsMovies = this.movieAPI.getMovieSimilar(this.movie.id);
        break;
    }

    if (obsMovies) {
      obsMovies.subscribe(x => {
        this.selectionMovies = x.results;
      });
    }
  }

}
