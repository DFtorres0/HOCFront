import { Console } from "console";
import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import { UserRole } from "../models/UserRole";
import axios from "axios";
import { Topic } from "../models/Topic";

export class TopicService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async axiosGetAll(): Promise<void | Topic[]> {
    return
    axios.get(this.baseUrl + 'all').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosGetGet(): Promise<void | Topic[]> {
    return
    axios.get(this.baseUrl + 'get').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPutCreate(Topic: Topic): Promise<void | Topic[]> {
    return
    axios.put(this.baseUrl + 'cretae', module).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

}
