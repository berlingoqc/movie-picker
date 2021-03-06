import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatModule } from './mat/mat.module';
import { MovieModule } from './movie/movie.module';
import { MoviedbModule } from './moviedb/moviedb.module';
import { NgModule } from '@angular/core';
import { KodiModule } from './kodi/kodi.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MoviedbModule, MovieModule, BrowserAnimationsModule, MatModule, KodiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
