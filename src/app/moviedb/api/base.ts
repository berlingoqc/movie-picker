import { ContextService } from '../moviedb.context';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

export class BaseAPI {
  static injector: Injector;
  protected version = '3';

  url = 'https://api.themoviedb.org';

  constructor(protected client: HttpClient, protected ctx: ContextService) {}

  getURL(subUrl: string, queryParam: { [id: string]: any[] }) {
    queryParam['api_key'] = [this.ctx.context.settings.api_key];
    if (this.ctx.context.session_id) {
      queryParam['session_id'] = [this.ctx.context.session_id];
    }
    return `${this.url}/${this.version}/${subUrl}` + this.joinQueryParam(queryParam);
  }

  private joinQueryParam(queryParam: { [id: string]: any[] }) {
    return (
      '?' +
      Object.entries(queryParam)
        .map(([key, values]) => {
          return values.map(v => `${key}=${v}`).join('&');
        })
        .join('&')
    );
  }
}
