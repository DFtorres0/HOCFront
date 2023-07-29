import { Console } from "console";
import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import { UserRole } from "../models/UserRole";
import axios from "axios";
import { CourseLessonProgress } from "../models/CourseLessonsProgress";

export class CourseLessonsProgressService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async axiosGetAll(): Promise<void | CourseLessonProgress[]> {
    return
    axios.get(this.baseUrl + 'all').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosGetGet(): Promise<void | CourseLessonProgress[]> {
    return
    axios.get(this.baseUrl + 'get').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPostEdit(courseLessonProgress: CourseLessonProgress): Promise<void | CourseLessonProgress[]> {
    return
    axios.post(this.baseUrl + 'edit', courseLessonProgress).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPutCreate(courseLessonProgress: CourseLessonProgress): Promise<void | CourseLessonProgress[]> {
    return
    axios.put(this.baseUrl + 'create', courseLessonProgress).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

}
