import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import {AppConfig} from '../../app.config';

@Injectable()
export class UserService {
  headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(private http: Http, private config: AppConfig) {
  }

  userRegistration(email: string, nickname: string, password: string, confirmPassword: string, language: string) {
    return this.http.post(this.config.apiUrl + '/Login/Register', {
      email: email,
      nickname: nickname,
      password: password,
      confirmPassword: confirmPassword,
      language: language
    }, {headers: this.headers});
  }

  forgot(email: string) {
    console.log(email);
    return this.http.put(this.config.apiUrl + "/Login/RestorePasswordByEmail", "\"" + email + "\"", {headers: this.headers}).map((response: Response) => {
      let res = response.json();
      if (res.errorDescription) {
        let alerts = res.errorDescription;
      }
    });
  }

  confirmForgot(token: string, newPassword: string, confirmPassword: string) {
    return this.http.put(this.config.apiUrl + "/Login/RestorePasswordByEmailConfirm", {
      token: token,
      password: newPassword,
      confirmPassword: confirmPassword
    }, {headers: this.headers}).map((response: Response) => {
      let result = response.json();
    });
  }

  confirmRegister(tokens: string) {
    return this.http.get(this.config.apiUrl + "/Login/ConfirmEmail/" + tokens).map((response: Response) => {
      response.statusText;
    });
  }

  steamAuth(id: string){
    return this.http.post(this.config.apiUrl + "/Login/Token/" + id ,  "",{headers: this.headers})
      .map(response => response.json())
      .map(steamResponse => {
        console.log(steamResponse);
        localStorage.setItem("currentUser", JSON.stringify(steamResponse));
      })
  }

  newNickname(nickName: string){
    return this.http.put(this.config.apiUrl + "/Account/NickName","" + nickName + "", this.jwt())
      .map(response => response.json());
  }

  newPassword(oldPassword: string, newPassword: string, confirmNewPassword: string){
    return this.http.post(this.config.apiUrl + "/Account/Password", {
      oldPassword: oldPassword,
      password: newPassword,
      confirmPassword: confirmNewPassword
    }, this.jwt())
      .map((response) => response.json());
  }

  changePhoneNumber(phone: string){
    this.http.put(this.config.apiUrl + "Account/PhoneNumber", phone, this.jwt())
      .map(response => response.json());
  }
  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }
}
