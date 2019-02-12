import { Component, OnInit } from "@angular/core";
import { User } from "./../../models/app.jwtauth.user.model";
import { UserService } from "./../../services/app.jwt.user.service";
import { Response } from "@angular/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-component",
  templateUrl: "./app.login.view.html"
})
export class LoginComponent implements OnInit {
  user: User;
  message: string;
  frmLogin: FormGroup;

  constructor(private usrService: UserService, private router: Router) {
    this.message = "";
    this.user = new User("", "", "");

    this.frmLogin = new FormGroup({
      UserName: new FormControl(
        this.user.UserName,
        Validators.compose([Validators.required])
      ),
      Password: new FormControl(
        this.user.Password,
        Validators.compose([Validators.required])
      )
    });
  }

  ngOnInit(): void {}

  signIn(): void {
    this.user = this.frmLogin.value;
    console.log("In signIn()"+ JSON.stringify(this.user));

    
    this.usrService.SignIn(this.user).subscribe(
      (resp: Response) => {
        if (resp.json().token) {
          sessionStorage.setItem("userToken",resp.json().token);
          this.router.navigate(["product"]);
        } else {
          this.message = resp.json().message;
        }
      },
      error => {
        console.log(`Error Occured ${error}`);
      }
    );
  }

  cancel(): void {
    this.user = new User("","","");
    this.message = "";
  }
}
