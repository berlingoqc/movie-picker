import { List, Movie } from './model';

import { Observable } from 'rxjs';
import { QueryParam } from './model/request';
import { Rpcimplement } from 'ngx-jsonrpc';

@Rpcimplement('', 'VideoLibrary')
export class VideoLibraryAPI {
    GetMovies(param: QueryParam): Observable<List<Movie>> {
        return null;
    }
}
