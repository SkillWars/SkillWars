import {Component, OnInit} from '@angular/core';
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


  steam() {
    window.location.href = "https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=http%3A%2F%2Flocalhost%3A4200%2Fsteam%3Fstate=steam&openid.realm=http%3A%2F%2Flocalhost%3A4200%2Fsteam&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select";
  }

  openModalWindow() {
    const elem = document.getElementById("forgotPasswordModalWindow");
    elem.style.display = "block";
  }


}
