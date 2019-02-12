import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-login-component",
  template: `
    <table class="table table-bordered table-stripped">
      <tr>
        <td><a [routerLink]="['login']">login</a></td>
        <td><a [routerLink]="['registration']">registration</a></td>
      </tr>
    </table>

    <router-outlet></router-outlet>
  `
})
export class MainjwtComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
