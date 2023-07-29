import { Console } from "console";
import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import { UserRole } from "../models/UserRole";
import { AvailableCourses } from "../models/AvailableCourses";
import axios from "axios";

export class AvailableCoursesService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async axiosGetAll(): Promise<void | AvailableCourses[]> {
    return
    axios.get(this.baseUrl + 'all').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosGetGet(): Promise<void | AvailableCourses[]> {
    return
    axios.get(this.baseUrl + 'get').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPostEdit(availableCourses: AvailableCourses): Promise<void | AvailableCourses[]> {
    return
    axios.post(this.baseUrl + 'edit', availableCourses).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPutCreate(availableCourses: AvailableCourses): Promise<void | AvailableCourses[]> {
    return
    axios.put(this.baseUrl + 'create', availableCourses).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

}
