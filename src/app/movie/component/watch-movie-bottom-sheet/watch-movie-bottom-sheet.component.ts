import { Component, OnInit, Inject } from '@angular/core';

import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MovieAvailability } from '../../service/MissingMovies';

@Component({
  selector: 'app-watch-movie-bottom-sheet',
  templateUrl: './watch-movie-bottom-sheet.component.html',
  styleUrls: ['./watch-movie-bottom-sheet.component.scss']
})
export class WatchMovieBottomSheetComponent implements OnInit {
  labels: {[id: string]: string} = {
    kodi: 'Watch this movie from the kodi player',
    http: 'Watch this movie directly in your browser with nginx'
  };

  constructor(
    private sheetRef: MatBottomSheetRef<WatchMovieBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: MovieAvailability) { }

  ngOnInit() {
  }


  dismiss(event: MouseEvent) {
    this.sheetRef.dismiss();
  }

}
