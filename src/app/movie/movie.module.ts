import { AvailabilityMoviesService, KodiMovieCollectionProvider, MovieCollectionProvider } from './service/MissingMovies';

import { ApiKeyComponent } from './component/api-key/api-key.component';
import { CommonModule } from '@angular/common';
import { DialogFindMovieComponent } from './dialog/dialog-find-movie/dialog-find-movie.component';
import { LoginBottonSheetComponent } from './component/login-botton-sheet/login-botton-sheet.component';
import { LoginComponent } from './page/login/login.component';
import { MatModule } from '../mat/mat.module';
import { MovieComponent } from './movie.component';
import { MovieListsListComponent } from './component/movie-lists-list/movie-lists-list.component';
import { MoviePickerComponent } from './page/movie-picker/movie-picker.component';
import { MovieRoutingModule } from './movie.routing';
import { MovieSelectComponent } from './component/movie-select/movie-select.component';
import { MoviesListComponent } from './component/movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { SelectedMovieResultComponent } from './component/selected-movie-result/selected-movie-result.component';
import { SelectedMoviesListComponent } from './component/selected-movies-list/selected-movies-list.component';
import { WatchMovieBottomSheetComponent } from './component/watch-movie-bottom-sheet/watch-movie-bottom-sheet.component';
import { CollectionComponent } from './page/collection/collection.component';

@NgModule({
  declarations: [
    LoginComponent,
    ApiKeyComponent,
    MoviePickerComponent,
    MovieComponent,
    MovieListsListComponent,
    SelectedMoviesListComponent,
    SelectedMovieResultComponent,
    LoginBottonSheetComponent,
    MovieSelectComponent,
    MoviesListComponent,
    DialogFindMovieComponent,
    WatchMovieBottomSheetComponent,
    CollectionComponent
  ],
  imports: [CommonModule, MovieRoutingModule, MatModule],
  exports: [MovieRoutingModule],
  providers: [{provide: MovieCollectionProvider, useClass: KodiMovieCollectionProvider}],
  entryComponents: [LoginBottonSheetComponent, WatchMovieBottomSheetComponent, DialogFindMovieComponent]
})
export class MovieModule {
  constructor() {
  }
}
