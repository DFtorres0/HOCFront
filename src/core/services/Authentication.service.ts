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
      }).catch((err) => {
        console.log(err);
      });
  }
}
