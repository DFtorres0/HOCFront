import { useEffect } from "react";
import { enviroment } from "../../enviroments/enviroment";
import { Session } from "../models/Session.model";
import { LoginObject } from "./LoginObject";



export class AuthenticationService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async login<Session>(LoginObject: LoginObject): Promise<void | Session> {
    const fetchAuthConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(LoginObject),
    };

    return await fetch(this.baseUrl + "authenticate", fetchAuthConfig)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", JSON.stringify(data.token))
        localStorage.setItem("user", JSON.stringify(data.user))
        console.log(localStorage.getItem("user"));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async logout<Bool>(): Promise<void | Bool> {
    const fetchAuthConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await fetch(this.baseUrl + "logout", fetchAuthConfig)
      .then((response) => {
        sessionStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
