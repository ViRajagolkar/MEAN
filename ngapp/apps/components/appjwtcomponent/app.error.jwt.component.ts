import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error-component",
  template: `
    <h2>Error Component</h2>
    <div class="container">{{ msg }}</div>
  `
})
export class ErrorjwtComponent implements OnInit {
  msg: string;
  constructor() {
    this.msg = "I am in Error Page.";
  }

  ngOnInit(): void {}
}
