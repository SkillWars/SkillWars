import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../Additional/_servises/authentication.service';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent implements OnInit {

  model: any = {};
  visibleError: boolean;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  autorize() {
    console.log(this.model);
    this.authenticationService.login(this.model.login, this.model.password)
      .subscribe(
        data => {
          this.visibleError = false;
        },
        error => {
          this.visibleError = true;
        });

  }
}
