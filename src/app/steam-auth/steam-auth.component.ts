import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {UserService} from "../Additional/_servises/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-steam-auth',
  templateUrl: './steam-auth.component.html',
  styleUrls: ['./steam-auth.component.scss']
})
export class SteamAuthComponent implements OnInit {

  private id: string;
  private steamId: any;
  private link: any = {};

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.steamId = queryParam['openid.identity'];
      }
    );
  }

  ngOnInit() {
    this.link = this.steamId.split('/');
    this.steamId = this.link[this.link.length - 1];
    this.userService.steamAuth(this.steamId)
      .subscribe(
        com => {
          console.log(com);
          this.router.navigate(["/table"]);
        },
        err => {
          console.log(err);
        }
      )
  }

}
