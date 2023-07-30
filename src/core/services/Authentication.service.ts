import { useEffect } from "react";
import { enviroment } from "../../enviroments/enviroment";
import { Session } from "../models/Session.model";
import { LoginObject } from "./LoginObject";
import axios from "axios";

export class AuthenticationService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async PostAuthenticate(loginObject: LoginObject): Promise<void | Session> {
    return axios
      .post(this.baseUrl + "authenticate", loginObject)
      .then(function (response: any) {})
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {});
  }
  
  async axiosLogout<Bool>(): Promise<void | Bool> {
    return axios
      .post(this.baseUrl + "logout")
      .then(function (response: any) {})
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {});
  }

}
