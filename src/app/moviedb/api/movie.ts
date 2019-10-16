import { List, Movie } from '../model';

import { BaseAPI } from './base';
import { ContextService } from './../moviedb.context';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieAPI extends BaseAPI {
  constructor(client: HttpClient, ctx: ContextService) {
    super(client, ctx);
  }

  getMovieRecommendation(movie_id: number) {
    return this.client.get<List<Movie>>(this.getURL(`movie/${movie_id}/recommendations`, {}));
  }
  getMovieSimilar(movie_id: number) {
    return this.client.get<List<Movie>>(this.getURL(`movie/${movie_id}/similar`, {}));
  }
}
