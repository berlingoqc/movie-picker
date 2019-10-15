import { CanActivate, CanActivateChild, Router } from '@angular/router';

import { ContextService } from '../moviedb.context';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivateChild {
  constructor(private ctx: ContextService, private router: Router) {}

  canActivateChild(): boolean {
    const result = this.ctx.context ? this.ctx.context.session_id != null && this.ctx.context.session_id != '' : false;
    console.log(result);
    if (!result) {
      this.router.navigate(['login']);
    }
    return result;
  }
}
