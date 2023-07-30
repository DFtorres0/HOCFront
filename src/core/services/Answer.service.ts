import { Console } from "console";
import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import { UserRole } from "../models/UserRole";
import { Answer } from "../models/Answer";
import axios from "axios";

export class AnswerService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async axiosGetAll(): Promise<void | Answer[]> {
    return axios.get(this.baseUrl + 'all').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosGetGet(): Promise<void | Answer[]> {
    return axios.get(this.baseUrl + 'get').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPostEdit(answer: Answer): Promise<void | Answer[]> {
    return axios.post(this.baseUrl + 'edit', answer).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPutCreate(answer: Answer): Promise<void | Answer[]> {
    return axios.put(this.baseUrl + 'create', answer).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

}
