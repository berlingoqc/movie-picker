import { Injectable } from '@angular/core';
import { Movie } from 'src/app/moviedb/model';
import { MoviePickerService } from './../../moviedb/service/movie-picker.service';
import { Observable } from 'rxjs';
import { VideoLibraryAPI } from 'src/app/kodi/video-library.api';
import { map } from 'rxjs/operators';

export interface MovieSoure {
  provider: string;
  url: string;
}

export interface MovieAvailability {
  available: boolean;
  sources: MovieSoure[];
  movie: Movie;
}

@Injectable()
export abstract class MovieCollectionProvider {
  abstract getMovie(movie: Movie[]): Observable<MovieAvailability[]>;
}


@Injectable()
export class KodiMovieCollectionProvider extends MovieCollectionProvider {

  constructor(private videoLibraryAPI: VideoLibraryAPI) {
    super();
  }

  getMovie(movies: Movie[]): Observable<MovieAvailability[]> {
    return this.videoLibraryAPI.GetMovies({ properties: ['uniqueid', 'file'] }).pipe(map(x => {
      return movies.map(mov => {
        const movieLib = x.movies.find(y => +y.uniqueid.tmdb === mov.id);
        const returnData = {
          available: (movieLib) ? true : false,
        } as any;
        if (returnData.available) {
          returnData.sources = [{
            provider: 'kodi',
            url: 'http://localhost:8080/videoPlayer.html?player=html5&src=vfs%2F' + movieLib.file
          }, {
            provider: 'http',
            url: movieLib.file
          }];
          returnData.movie = mov;
        }
        return returnData;
      });
    }));
  }

}



@Injectable({
  providedIn: 'root'
})
export class AvailabilityMoviesService {

  movies: MovieAvailability[];

  constructor(private provider: MovieCollectionProvider, private moviePicker: MoviePickerService) {
    this.moviePicker.movieChange.asObservable().subscribe(x => {
      this.provider.getMovie(x).subscribe(y => {
        this.movies = y;
      });
    });

  }

  async getMoviesAvailability(): Promise<MovieAvailability[]> {
    return null;

  }

}
