import { Component, OnInit } from '@angular/core';

import { ContextService } from './../../../moviedb/moviedb.context';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-botton-sheet',
  templateUrl: './login-botton-sheet.component.html',
  styleUrls: ['./login-botton-sheet.component.scss']
})
export class LoginBottonSheetComponent implements OnInit {
  constructor(
    private router: Router,
    private ctx: ContextService,
    private sheetRef: MatBottomSheetRef<LoginBottonSheetComponent>
  ) {}

  ngOnInit() {}

  deleteSession(event: MouseEvent) {
    this.sheetRef.dismiss();
    event.preventDefault();
    const c = this.ctx.context;
    c.session_id = null;
    this.ctx.context = c;
    this.router.navigate(['login']);
  }
}
