import { Injectable } from '@angular/core';
import { ListDetails } from '../model';
import { ListsAPI } from './../api/lists';
import { Movie } from './../model/movie';
import { Subject } from 'rxjs';

function getRandomItem<T>(lists: T[]): T {
  const index = Math.floor(Math.random() * lists.length);
  return lists[index];
}

@Injectable({
  providedIn: 'root'
})
export class MoviePickerService {
  lists: ListDetails[] = [];


  private innerSelectedMovies: { [id: string]: Movie[]};

  selectedMovies: Movie[] = [];


  randomMovie: Movie;

  movieChange: Subject<Movie[]> = new Subject();
  randomMovieChange: Subject<Movie> = new Subject();

  constructor(private listsAPI: ListsAPI) {}

  async addMovieFromList(ids: number[]) {
    for (const id of ids) {
      const listDetail = await this.listsAPI.getDetails(id).toPromise();
      this.lists.push(listDetail);
      this.selectedMovies.push(...listDetail.items);
      this.movieChange.next(this.selectedMovies);
    }
  }

  removeSelectedMovie(id: number) {
    this.selectedMovies = this.selectedMovies.filter(x => x.id != id);
    this.randomMovieChange.next(null);
  }

  removeLists(id: string) {
    const index = this.lists.findIndex(x => x.id == id);
    if (index >= 0) {
      const item = this.lists[index];
      this.lists.splice(index, 1);
      this.selectedMovies = this.selectedMovies.filter(x => item.items.findIndex(m => m.id == x.id) == -1);
    }
  }

  getRandom(): Movie {
    this.randomMovie = getRandomItem(this.selectedMovies);
    this.randomMovieChange.next(this.randomMovie);
    return this.randomMovie;
  }
}
