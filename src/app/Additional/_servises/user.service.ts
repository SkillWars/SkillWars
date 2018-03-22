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
    return this.http.put(this.config.apiUrl + "/Login/ForgotPassword", "\"" + email + "\"", {headers: this.headers}).map((response: Response) => {
      let res = response.json();
      if (res.errorDescription) {
        let alerts = res.errorDescription;
      }
    });
  }

  confirmForgot(token: string, newPassword: string) {
    return this.http.put(this.config.apiUrl + "/Account/ForgotPasswordConfirm", {
      token: token,
      newPassword: newPassword
    }, {headers: this.headers}).map((response: Response) => {
      let result = response.json();
    });
  }

  confirmRegister(tokens: string) {
    return this.http.get(this.config.apiUrl + "/Login/Confirm/" + tokens).map((response: Response) => {
      response.statusText;
    });
  }

  getLobbyById(id: number) {
    return this.http.get(this.config.apiUrl + "/Lobbies/" + id + "/Players" + "", this.jwt())
      .map(response => response.json())
      .map(lobbyInfo => {
        return lobbyInfo.map(teams => {
          return {
            firstTeamId: teams[0].id,
            firstTeamType: teams[0].teamType
          }
        })
      })
  }

  steamAuth(id: string){
    return this.http.post(this.config.apiUrl + "/Account/Token/" + id, {headers: this.headers})
      .map(response => response.json())
      .map(steamResponse => {
        return steamResponse.map(steam => {
          return {
            errorCode: steam.errorCode,
            errorDescription: steam.errorDescription
          }
        })
      })
  }

  steamRegisters(email: string, phoneNumber: string){
    return this.http.post(this.config.apiUrl + "/Account/SteamRegisters", {
      steamId: localStorage.getItem("steamId"),
      email: email,
      phoneNumber: phoneNumber
    },
      {headers: this.headers})
      .map(response => response.json())
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
