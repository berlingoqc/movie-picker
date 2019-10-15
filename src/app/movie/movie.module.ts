import { ApiKeyComponent } from './component/api-key/api-key.component';
import { CommonModule } from '@angular/common';
import { LoginBottonSheetComponent } from './component/login-botton-sheet/login-botton-sheet.component';
import { LoginComponent } from './page/login/login.component';
import { MatModule } from '../mat/mat.module';
import { MovieComponent } from './movie.component';
import { MovieListsListComponent } from './component/movie-lists-list/movie-lists-list.component';
import { MoviePickerComponent } from './page/movie-picker/movie-picker.component';
import { MovieRoutingModule } from './movie.routing';
import { NgModule } from '@angular/core';
import { SelectedMovieResultComponent } from './component/selected-movie-result/selected-movie-result.component';
import { SelectedMoviesListComponent } from './component/selected-movies-list/selected-movies-list.component';
import { MovieSelectComponent } from './component/movie-select/movie-select.component';
import { MoviesListComponent } from './component/movies-list/movies-list.component';

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
    MoviesListComponent
  ],
  imports: [CommonModule, MovieRoutingModule, MatModule],
  exports: [MovieRoutingModule],
  entryComponents: [LoginBottonSheetComponent]
})
export class MovieModule {}
