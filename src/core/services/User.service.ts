import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import { UserRole } from "../models/UserRole";
import axios from "axios";
import { get } from "jquery";
import { promises } from "dns";

export class UserService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async getAll(): Promise<void | User[]> {
    return axios
      .get(this.baseUrl + "all")
      .then(function (response: any) {
        const userData: User[] = response.data;
        console.log(userData);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {});
  }
  async axiosGetOne(): Promise<void | User[]> {
    return axios
      .get(this.baseUrl + "get")
      .then(function (response: any) {
        const userData: User = response.data;
        console.log(userData);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {});
  }

  async axiosPostEdit(user: User): Promise<void | User> {
    return axios
      .post(this.baseUrl + "edit", user)
      .then(function (response: any) {})
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {});
  }

  async axiosCreate(user: User): Promise<void | User> {
    return axios
      .put(this.baseUrl + "create", user)
      .then(function (response: any) {})
      .catch(function (error: any) {
        console.log(error);
      })
      .finally(function () {});
  }
}