import { Injector, NgModule } from '@angular/core';
import { NgxJsonrpcModule, RPCClientSettings } from 'ngx-jsonrpc';

import { CommonModule } from '@angular/common';
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
  constructor(injector: Injector, videoApi: VideoLibraryAPI, settings: RPCClientSettings) {
    settings.url = 'localhost:4200';
    RPCClientSettings.injector = injector;
  }
}
