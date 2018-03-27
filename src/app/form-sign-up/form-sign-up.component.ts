import {Component, OnInit} from '@angular/core';
import {UserService} from '../Additional/_servises/user.service';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent implements OnInit {

  visibleErrorRegister: boolean;
  model: any = {};

  constructor(private userServise: UserService) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.userServise.userRegistration(
      this.model.email,
      this.model.nickname,
      this.model.password,
      this.model.confirmPassword,
      '0').subscribe(
        res => {
          console.log(res.json());
        },
        err => {
          console.log(err.statusText);
          console.log(err);
        }
    );
  }

}
