import { Injectable } from '@angular/core';
import { ListDetails } from '../model';
import { ListsAPI } from './../api/lists';
import { Movie } from './../model/movie';

function getRandomItem<T>(lists: T[]): T {
  const index = Math.floor(Math.random() * lists.length);
  return lists[index];
}

@Injectable()
export class MoviePickerService {
  lists: ListDetails[] = [];
  selectedMovies: Movie[] = [];

  randomMovie: Movie;

  constructor(private listsAPI: ListsAPI) {}

  async addMovieFromList(ids: number[]) {
    for (const id of ids) {
      const listDetail = await this.listsAPI.getDetails(id).toPromise();
      this.lists.push(listDetail);
      this.selectedMovies.push(...listDetail.items);
    }
  }

  removeSelectedMovie(id: number) {
    this.selectedMovies = this.selectedMovies.filter(x => x.id != id);
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
    return this.randomMovie;
  }
}
