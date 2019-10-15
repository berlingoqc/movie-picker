import { Injectable } from '@angular/core';
import { Settings } from './movidedb.settings';

export interface Context {
  settings: Settings;
  session_id: string;
  expires_at: string;
  sort_by: string;
  page: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private innerContext: Context;

  get context(): Context {
    if (!this.innerContext) {
      const str = localStorage.getItem('ctx');
      if (str != 'undefined') {
        this.innerContext = JSON.parse(str);
      } else {
        return undefined;
      }
    }
    return this.innerContext;
  }

  set context(ctx: Context) {
    this.innerContext = ctx;
    localStorage.setItem('ctx', JSON.stringify(this.innerContext));
  }
}
