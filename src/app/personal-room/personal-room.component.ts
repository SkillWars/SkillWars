import { Component, OnInit } from '@angular/core';
import {UserService} from "../Additional/_servises/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personal-room',
  templateUrl: './personal-room.component.html',
  styleUrls: ['./personal-room.component.scss']
})
export class PersonalRoomComponent implements OnInit {

  modelChangePassword: any = {};
  nick: string;
  phone: string;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  changeNickname(){
    this.userService.newNickname(this.nick)
      .subscribe(
        com => {
          console.log(com);
          alert("Nickname is already changed");
        },
        err => {
          console.log(err);
          alert("Error");
        }
      )
  }
  changePasswordErr: any = {};
  changePassword(){
    this.userService.newPassword(this.modelChangePassword.oldPassword, this.modelChangePassword.newPassword, this.modelChangePassword.confirmNewPassword)
      .subscribe(
        (data) => this.changePasswordErr = data
   );
  }

  changePhoneNumber(){
    this.userService.changePhoneNumber(this.phone)
  }

}
