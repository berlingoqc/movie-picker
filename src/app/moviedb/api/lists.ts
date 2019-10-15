import { BaseAPI } from './base';
import { ContextService } from './../moviedb.context';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListDetails } from '../model';
import { Observable } from 'rxjs';

@Injectable()
export class ListsAPI extends BaseAPI {
  constructor(client: HttpClient, ctx: ContextService) {
    super(client, ctx);
  }

  getDetails(lists_id: string | number): Observable<ListDetails> {
    return this.client.get<ListDetails>(this.getURL(`list/${lists_id}`, {}));
  }
}
