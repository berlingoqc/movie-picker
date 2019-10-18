import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContextService } from 'src/app/moviedb/moviedb.context';
import { LoginService } from 'src/app/moviedb/service/login.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('stepper', { static: true}) stepper: MatStepper;

  urlAuthorization: string;
  exception: string;

  tokenApprouval: string;
  requestToken: string;

  keyFormGroup: FormGroup;
  validatedTokenFormGroup: FormGroup;

  constructor(
    public context: ContextService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    public router: Router,
    private formBuilder: FormBuilder) {

    this.keyFormGroup = this.formBuilder.group({
      apiKeyCtrl: [this.context.context.settings.api_key, Validators.required]
    });
    this.validatedTokenFormGroup = this.formBuilder.group({
      tokenValidated: [this.tokenApprouval, Validators.required]
    });


  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(x => {
      this.tokenApprouval = x.approved;
      this.requestToken = x.request_token;
      if (this.tokenApprouval === 'true') {
        this.stepper.selectedIndex = 2;
        this.navigateOver();
      }
    });

    this.stepper.selectionChange.subscribe(x => {
      if (x.selectedIndex === 1) {
        this.step1();
      }
    });
  }

  step1() {
    const ctx = this.context.context;
    ctx.settings.api_key = this.keyFormGroup.controls.apiKeyCtrl.value;
    this.context.context = ctx;
    this.loginService.loginUser().then(x => {
      this.urlAuthorization = this.loginService.getAuthURL(x.request_token);
    }).catch(ex => {
      this.exception = JSON.stringify(ex);
    });
  }

  navigateOver() {
    if (this.tokenApprouval === 'true') {
      this.loginService.getSession(this.requestToken).then(session => {}).catch(ex => this.exception = JSON.stringify(ex));
    }

  }
}
