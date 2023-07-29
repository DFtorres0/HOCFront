import { enviroment } from "../../enviroments/enviroment";
import { User } from "../models/User";
import axios from "axios";

export class UserService {
  private baseUrl = `${enviroment.apiUrl}/Users/`;

  async getAll(): Promise<void | User[]> {

    try {
      axios
        .get(`${this.baseUrl}all`)
        .then(function (response: any) {
          const userData: User[] = response.data;
          console.log(userData);
        })
        .catch(function (error: any) {
          console.log(error);
        })
        .finally(function () {});
    } catch (error) {
      console.log(error);
    }
  }

  async create(user: User): Promise<void | User[]> {
    const userArray: User[] = [];

    const fetchConfig = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

  }

  async delete(number: number): Promise<void | User[]> {
    const userArray: User[] = [];

    
  }
}
