import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/moviedb/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  state: string;
  urlState2: string;

  constructor(private activatedRoute: ActivatedRoute, private loginService: LoginService, private router: Router) {
    this.state = this.loginService.getLoginStep();
    this.activatedRoute.queryParams.subscribe(x => {
      const approved = x['approved'];
      const requestToken = x['request_token'];
      if (approved == 'true') {
        this.loginService.getSession(requestToken).then(session => {
          this.router.navigate(['movie']);
        });
      }
    });
  }

  ngOnInit() {
    console.log(this.state);
    switch (this.state) {
      case 'session':
        this.step2();
        break;
    }
  }

  step2() {
    this.loginService.loginUser().then(x => {
      this.urlState2 = this.loginService.getAuthURL(x.request_token);
    });
  }
}
