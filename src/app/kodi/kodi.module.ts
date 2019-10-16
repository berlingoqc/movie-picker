import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxJsonrpcModule, RPCClientSettings } from 'ngx-jsonrpc';
import { VideoLibraryAPI } from './video-library.api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxJsonrpcModule
  ],
  providers: [VideoLibraryAPI]
})
export class KodiModule {
  constructor(injector: Injector, videoApi: VideoLibraryAPI) {
    RPCClientSettings.injector = injector;
    videoApi.GetMovies().subscribe(x => console.log(x));
  }
}
