import {Component, OnInit} from '@angular/core';
import {UserService} from "../Additional/_servises/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {

  private id: string;
  private token: string;
  model: any = {};

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.token = queryParam['token'];
      }
    );
  }

  ngOnInit() {
  }

  restorePassword() {
    this.userService.confirmForgot(this.token, this.model.password, this.model.confirmNewPassword)
      .subscribe(
        com => {
          this.router.navigate(['/login'])
          console.log(com)
        },
        err => {
          console.log(err)
        }
      )
  }
}
