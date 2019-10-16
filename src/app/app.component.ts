import { Component } from '@angular/core';
import { LoginBottonSheetComponent } from './movie/component/login-botton-sheet/login-botton-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-picker';

  constructor(public sheet: MatBottomSheet) {}

  openLoginBottonSheet() {
    this.sheet.open(LoginBottonSheetComponent);
  }
}
