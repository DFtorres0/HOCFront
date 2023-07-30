import { Console } from "console";
import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import { UserRole } from "../models/UserRole";
import axios from "axios";
import { Instructor } from "../models/Instructor";

export class InstructorService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async axiosGetAll(): Promise<void | Instructor[]> {
    return axios.get(this.baseUrl + 'all').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosGetGet(): Promise<void | Instructor[]> {
    return axios.get(this.baseUrl + 'get').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPostEdit(instructor: Instructor): Promise<void | Instructor[]> {
    return axios.post(this.baseUrl + 'edit', instructor).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPutCreate(instructor: Instructor): Promise<void | Instructor[]> {
    return axios.put(this.baseUrl + 'create', instructor).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

}
