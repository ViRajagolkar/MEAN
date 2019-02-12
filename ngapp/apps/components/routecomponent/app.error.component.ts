import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error-component",
  template: `
    <h2>Error Component</h2>
    <div class="container">{{ message }}</div>
  `
})
export class ErrorComponent implements OnInit {
  message: string;
  constructor() {
    this.message = "I am in Error Page.";
  }

  ngOnInit(): void {}
}
