import { Component, OnInit } from "@angular/core";
import { User } from "./../../models/app.jwtauth.user.model";
import { UserService } from "../../services/app.jwt.user.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-registration-component",
  templateUrl: "./app.registration.view.html"
})
export class RegistrationComponent implements OnInit {
  user: User;
  users: Array<User>;

  constructor(private serv: UserService) {
    this.user = new User("", "", "");
    this.users = new Array<User>();
  }

  ngOnInit(): void {}

  SignUp(): void {
    console.log("SignUp");
    this.serv.postUserData(this.user).subscribe(
      (resp: Response) => {
        this.users.push(resp.json().data);
        console.log(resp.json().data);
      },
      error => {
        console.log(`Error Occured ${error}`);
      }
    );
  }

  Cancel(): void {
    this.user = new User("", "", "");
    //this.message = "";
    this.Cancel;
  }
}
