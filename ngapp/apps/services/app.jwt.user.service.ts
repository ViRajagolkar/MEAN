import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "./../models/app.jwtauth.user.model";

@Injectable()
export class UserService {
  url: string;

  constructor(private http: Http) {
    this.url = "http://localhost:4040";
  }

  getUserData(): Observable<Response> {
    let resp: Observable<Response>;
    resp = this.http.get(`${this.url}/api/users`);
    return resp;
  }

  //Registration
  postUserData(usr: User): Observable<Response> {
    let resp: Observable<Response>;
    // Define request headers
    let header: Headers = new Headers({ "Content-Type": "application/json" });
    //header.append("AUTHORIZATION", "basic admin:admin123");
    // Define request option for headers(Collection of header values- RequestOptions)
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(
      `${this.url}/api/users/create`,
      JSON.stringify(usr),
      options
    );
    return resp;
  }

  //Login User
  SignIn(usr: User): Observable<Response> {
    console.log("In Service...");
    let resp: Observable<Response>;
    let header: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions();
    options.headers = header;
    resp = this.http.post(
      `${this.url}/api/users/auth`,
      JSON.stringify(usr),
      options
    );
    return resp;
  }
}
