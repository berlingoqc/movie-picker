import { NewSessionResp, NewTokenResp } from '../model/responses';

import { BaseAPI } from './base';
import { ContextService } from './../moviedb.context';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationAPI extends BaseAPI {
  constructor(client: HttpClient, ctx: ContextService) {
    super(client, ctx);
  }
  getRequestToken(): Observable<NewTokenResp> {
    return this.client.get<any>(this.getURL('authentication/token/new', {}));
  }

  postCreateSession(requestToken: string): Observable<NewSessionResp> {
    return this.client.post<any>(this.getURL('/authentication/session/new', {}), {
      request_token: requestToken
    });
  }
}
