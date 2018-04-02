import { Component, OnInit } from '@angular/core';
import {UserService} from "../Additional/_servises/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-forgot-modal',
  templateUrl: './form-forgot-modal.component.html',
  styleUrls: ['./form-forgot-modal.component.scss']
})
export class FormForgotModalComponent implements OnInit {

  models: any = {};
  checkEmail: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  forgotPassword(){
    this.userService.forgot(this.models.email)
      .subscribe(
        com => {
          this.router.navigate(['/#checkEmail']);
          this.checkEmail == true;
        },
        err => {
          alert("Щось пішло не так))")
          this.checkEmail == false;
        }

      )
  }

}
