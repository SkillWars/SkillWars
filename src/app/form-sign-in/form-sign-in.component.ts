import {Component, OnInit} from '@angular/core';
import {UserService} from '../Additional/_servises/user.service';
import {AuthenticationService} from '../Additional/_servises/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent implements OnInit {

  model: any;
  loading: any;

  constructor(
   // private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    console.log()
  }

  autorize() {
    this.loading = true;
    this.authenticationService.login(this.model.login, this.model.password)
      .subscribe(
        data => {
          //this.router.navigate([]);

        },
        error => {
          this.loading = false;

        });
  }
}
