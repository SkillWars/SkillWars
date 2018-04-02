import {Component, OnInit} from '@angular/core';
import {UserService} from '../Additional/_servises/user.service';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent implements OnInit {
  loading: boolean;
  visibleErrorRegister: boolean;
  model: any = {};

  constructor(private userServise: UserService) {
  }

  ngOnInit() {
  }

  registerUser() {
    this.loading = true;
    this.userServise.userRegistration(
      this.model.email,
      this.model.nickname,
      this.model.password,
      this.model.confirmPassword,
      '0').subscribe(
        res => {
          this.loading = false;
          console.log(res.json());
        },
        err => {
          this.loading = false;
          console.log(err.statusText);
          console.log(err);
        }
    );
  }

}
