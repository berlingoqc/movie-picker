import { Movie, MovieList } from './../model/movie';

import { Account } from './../model';
import { BaseAPI } from './base';
import { ContextService } from './../moviedb.context';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from './../model/lists';
import { Observable } from 'rxjs';

@Injectable()
export class AccountAPI extends BaseAPI {
  constructor(client: HttpClient, ctx: ContextService) {
    super(client, ctx);
  }
  getDetails(): Observable<Account> {
    return this.client.get<Account>(this.getURL('account', {}));
  }
  getCreatedLists(id: number): Observable<List<MovieList>> {
    return this.client.get<List<MovieList>>(this.getURL(`account/${id}/lists`, {}));
  }
  getFavoriteMovies(): Observable<List<Movie>> {
    return null;
  }
  getMovieWatchList(): Observable<List<Movie>> {
    return null;
  }
}
