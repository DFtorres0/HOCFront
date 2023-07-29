import { Console } from "console";
import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import { UserRole } from "../models/UserRole";
import axios from "axios";
import { Module } from "../models/Module";


export class ModuleService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;


  async axiosGetAll(): Promise<void | Module[]> {
    axios.get(this.baseUrl + 'all').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosGetGet(): Promise<void | Module[]> {
    return
    axios.get(this.baseUrl + 'get').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPostEdit(module: Module): Promise<void | Module[]> {
    return
    axios.post(this.baseUrl + 'edit', module).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosPutCreate(module: Module): Promise<void | Module[]> {
    return
    axios.put(this.baseUrl + 'create', module).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

}
