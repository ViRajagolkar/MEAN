import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-name",
  template: `
    <h2>about Component</h2>
    <div class="container">{{ message }}</div>
    <br />
    <div class="container">The value is:{{ value }}</div>
    <br />
    <input
      type="button"
      value="Navigate to Contact"
      (click)="navigateToContact()"
    />
  `
})
export class AboutComponent implements OnInit {
  message: string;
  value: number;
  // The injection of router and activatedroute will fetch Router object from RouterModule imported in NgModule using // "routing"
  constructor(private router: Router, private act: ActivatedRoute) {
    this.message = "I am about Component";
  }

  //explicitely routed to contact
  navigateToContact(): void {
    this.router.navigate(["contact"]);
  }

  //subcribe to parameter on ActivatedRoute Object
  ngOnInit(): void {
    this.act.params.subscribe(params => {
      this.value = params.id;
    });
  }
}
