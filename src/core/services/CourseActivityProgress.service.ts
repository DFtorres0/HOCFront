import { Console } from "console";
import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import { UserRole } from "../models/UserRole";
import { CourseActivityProgress } from "../models/CourseActivityProgress";
import axios from "axios";

export class CourseActivityProgressService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async axiosGetAll(): Promise<void | CourseActivityProgress[]> {
    return axios.get(this.baseUrl + 'all').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosGetGet(): Promise<void | CourseActivityProgress[]> {
    return axios.get(this.baseUrl + 'get').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPostEdit(courseActivityProgress: CourseActivityProgress): Promise<void | CourseActivityProgress[]> {
    return axios.post(this.baseUrl + 'edit', courseActivityProgress).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPutCreate(courseActivityProgress: CourseActivityProgress): Promise<void | CourseActivityProgress[]> {
    return axios.put(this.baseUrl + 'create', courseActivityProgress).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

}
