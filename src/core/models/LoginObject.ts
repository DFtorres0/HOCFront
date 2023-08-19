export class LoginObject {
    
    public username: string;
    public password: string;

    constructor (loginObject : LoginObjectModel ) {
        this.username = loginObject.username;
        this.password = loginObject.password;
    }
}

export interface LoginObjectModel {
    username: string;
    password: string;
}