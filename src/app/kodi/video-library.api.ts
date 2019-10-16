import { Rpcimplement } from 'ngx-jsonrpc';
import { Observable } from 'rxjs';



@Rpcimplement('', 'VideoLibrary')
export class VideoLibraryAPI {
    GetMovies(): Observable<any> {
        return null;
    }
}
