import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../Additional/_servises/authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent implements OnInit {
  loading: boolean = false;
  model: any = {};
  visibleError: boolean;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.logout();
  }

  autorize() {
    this.loading = true;
    console.log(this.model);
    this.authenticationService.login(this.model.login, this.model.password)
      .subscribe(
        data => {
          this.visibleError = false;
          this.router.navigate(['/table']);
        },
        error => {
          this.loading = false;
          this.visibleError = true;
        });

  }

}
