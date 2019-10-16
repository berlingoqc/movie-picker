import { AuthenticationAPI } from './../api/login';
import { ContextService } from './../moviedb.context';
import { Injectable } from '@angular/core';
import { NewSessionResp } from './../model/responses';
import { NewTokenResp } from '../model/responses';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private authentication: AuthenticationAPI, private ctx: ContextService) {}

  getLoginStep(): 'apiKey' | 'session' | 'valid' {
    const ctx = this.ctx.context;
    if (!ctx || ctx.settings.api_key === '') {
      return 'apiKey';
    } else if (!ctx.session_id || ctx.session_id === '') {
      return 'session';
    }
    return 'valid';
  }

  getAuthURL(requestToken: string) {
    return `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:4200/login`;
  }

  async loginUser(): Promise<NewTokenResp> {
    const ctx = this.ctx.context;
    if (ctx.settings.api_key === '') {
      throw new Error('key not set');
    }
    this.ctx.context.session_id = null;
    this.ctx.context = ctx;
    const respToken = await this.authentication.getRequestToken().toPromise();
    if (!respToken.success) {
      throw new Error('token not valid');
    }
    ctx.expires_at = respToken.expire_at;
    this.ctx.context = ctx;
    return respToken;
  }

  async getSession(requestToken: string): Promise<NewSessionResp> {
    const ctx = this.ctx.context;
    const respSession = await this.authentication.postCreateSession(requestToken).toPromise();
    if (respSession.success) {
      ctx.session_id = respSession.session_id;
      this.ctx.context = ctx;
      return respSession;
    }
    throw new Error('session error');
  }
}
