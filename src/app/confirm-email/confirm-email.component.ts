import { Component, OnInit } from '@angular/core';
import {AlertService} from "../Additional/_servises/alert.service";
import {UserService} from "../Additional/_servises/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {


  ngOnInit() {
  }

  private id: string;
  private token: string;

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
  confirmRegister() {
    return this.userService.confirmRegister(this.token).subscribe(
      data => {
        alert("Подтверждение прошло успешно!")
        this.router.navigate(['/login']);
      },
      error => {
        alert("Ошибка подтверждения")
      });
  }
}
