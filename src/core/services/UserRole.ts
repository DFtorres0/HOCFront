import { enviroment } from "../../enviroments/enviroment";
import { UserRole } from "../models/UserRole";
import axios from "axios";

export class UserRoleService {
  private baseUrl = `${enviroment.apiUrl}/UserRole/`;

  async axiosGetAll(): Promise<void | UserRole[]> {
    return
    axios.get(this.baseUrl + 'all').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }

  async axiosGetGet(): Promise<void | UserRole[]> {
    return
    axios.get(this.baseUrl + 'get').then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    }).finally(function () {})
  }




  async getAll(): Promise<undefined | UserRole[]> {
    const userRolesArray: UserRole[] = [];

    const fetchAuthConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await fetch(this.baseUrl + "all", fetchAuthConfig)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element: any) => {
          const tempUserRole: UserRole = {
            RoleName: "",
            RoleDescription: "",
          };
          tempUserRole.UserRoleId = element.userRoleId;
          tempUserRole.RoleName = element.roleName;
          tempUserRole.RoleDescription = element.roleDescription;
          console.log(tempUserRole);
          userRolesArray.push(tempUserRole);
        });
        return userRolesArray;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}
