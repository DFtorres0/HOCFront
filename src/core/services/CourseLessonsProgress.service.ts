import { Console } from "console";
import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import { UserRole } from "../models/UserRole";
import { UserRoleService } from "./UserRole";
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

  async getAll(): Promise<void | User[]> {
    const userArray: User[] = [];

    const fetchAuthConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await fetch(this.baseUrl + "all", fetchAuthConfig)
      .then((response) => response.json())
      .then((data) => {
        data.forEach(async (element: any) => {
          const userRole = new UserRoleService();
          const tempUser: User = {
            UserName: "",
            UserUsername: "",
            UserPassword: "",
            UserEmail: "",
            UserRole: undefined,
          };
          tempUser.UserId = element.userId;
          tempUser.UserName = element.userName;
          tempUser.UserPassword = element.userPassword;
          tempUser.UserEmail = element.userEmail;
          tempUser.UserPhone = element.userPhone;
          tempUser.UserUsername = element.userUsername;
          tempUser.UserProfilePicture = element.userProfilePicture;
          await userRole.getAll().then((userRole) => {
            let userRoleArray: UserRole[];
            typeof userRole !== "undefined"
              ? ((userRoleArray = Array.from(userRole)),
                userRoleArray.map((currentUserRole) => {
                  currentUserRole.UserRoleId === element.userRoleId
                    ? ((tempUser.UserRole = currentUserRole))
                    : null;
                }))
              : (tempUser.UserRole = undefined);
          });
          userArray.push(tempUser);
          console.log(userArray);
        });
        return userArray;
      })
      .catch((err) => {
        return console.log(err);
      });
  }

  async create(user: User): Promise<void | User[]> {
    const userArray: User[] = [];

    const fetchConfig = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    };

    return await fetch(this.baseUrl + "create", fetchConfig)
      .then((response) => response.json())
      .then((data) => {

        data.forEach(async (element: any) => {
          const userRole = new UserRoleService();
          const tempUser: User = {
            UserName: "",
            UserUsername: "",
            UserPassword: "",
            UserEmail: "",
            UserRole: undefined,
          };
          tempUser.UserId = element.userId;
          tempUser.UserName = element.userName;
          tempUser.UserPassword = element.userPassword;
          tempUser.UserEmail = element.userEmail;
          tempUser.UserPhone = element.userPhone;
          tempUser.UserUsername = element.userUsername;
          tempUser.UserProfilePicture = element.userProfilePicture;
          await userRole.getAll().then((userRole) => {
            let userRoleArray: UserRole[];
            typeof userRole !== "undefined"
              ? ((userRoleArray = Array.from(userRole)),
                userRoleArray.map((currentUserRole) => {
                  currentUserRole.UserRoleId === element.userRoleId
                    ? ((tempUser.UserRole = currentUserRole))
                    : null;
                }))
              : (tempUser.UserRole = undefined);
          });
          userArray.push(tempUser);
          console.log(userArray);
        });

        return userArray;
      })
      .catch((err) => {
        return console.log(err);
      });
  }

  async delete(number: number): Promise<void | User[]> {
    const userArray: User[] = [];

    const fetchConfig = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(number)
    }; 

    return await fetch(this.baseUrl + `delete/${number}`, fetchConfig)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        data.forEach(async (element: any) => {
          const userRole = new UserRoleService();
          const tempUser: User = {
            UserName: "",
            UserUsername: "",
            UserPassword: "",
            UserEmail: "",
            UserRole: undefined,
          };
          tempUser.UserId = element.userId;
          tempUser.UserName = element.userName;
          tempUser.UserPassword = element.userPassword;
          tempUser.UserEmail = element.userEmail;
          tempUser.UserPhone = element.userPhone;
          tempUser.UserUsername = element.userUsername;
          tempUser.UserProfilePicture = element.userProfilePicture;
          await userRole.getAll().then((userRole) => {
            let userRoleArray: UserRole[];
            typeof userRole !== "undefined"
              ? ((userRoleArray = Array.from(userRole)),
                userRoleArray.map((currentUserRole) => {
                  currentUserRole.UserRoleId === element.userRoleId
                    ? ((tempUser.UserRole = currentUserRole))
                    : null;
                }))
              : (tempUser.UserRole = undefined);
          });
          userArray.push(tempUser);
          console.log(userArray);
        });

        return userArray;
      })
      .catch((err) => {
        return console.log(JSON.stringify(err));
      });
  }

}
