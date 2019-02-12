import { Component, OnInit } from "@angular/core";
import { Category, Categories } from "./../../models/app.category.input.model";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "category-data",
  templateUrl: "./category.html"
})
export class CategoryInputComponent implements OnInit {
  categories = Categories;
  categotyName: string;
 // changes = new EventEmitter();
  constructor() {
    this.categotyName = "";
  }
  selectCategory(c: any) {
    this.categotyName = c.categoryName;
    //console.log(this.categotyName);
  }

  ngOnInit() {}

  // @Output()
  // showMessage() {
  //   if (this.selectCategory) {
  //     this.changes.emit(this.categotyName);
  //   }
  //}
}
