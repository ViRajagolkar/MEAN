import { Component, OnInit } from "@angular/core";
import { Categories } from "./app.product.model";
import { Product } from "./../../models/app.product.model";
import { ProductService } from "./../../services/app.products.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-productservice-component",
  templateUrl: "./app.product.view.html"
})
export class ProductServiceComponent implements OnInit {
  //The OnInit is component Lifecycle Interface
  //This provides ngOnInit() method

  product: Product;
  products: Array<Product>;
  //categories locally
  categories = Categories;
  tableHeaders: Array<string>;
  isChecked: Boolean;
  count: number;
  prodcheck: boolean;

  constructor(private serv: ProductService) {
    this.product = new Product("", 0, "", "", "", 0);
    this.products = new Array<Product>();
    this.tableHeaders = new Array<string>();
    this.isChecked = false;
    this.prodcheck = false;
  }

  //The method will be invoked immediately after constructor
  ngOnInit(): void {
    for (let p in this.product) {
      if (p != "check") {
        this.tableHeaders.push(p);
      }
      this.serv.getData().subscribe(
        (resp: Response) => {
          this.products = resp.json().data;
          console.log(resp.json().data);
        },
        error => {
          console.log(`Error Occured ${error}`);
        }
      );
    }
  }

  clear(): void {
    this.product = new Product("", 0, "", "", "", 0);
  }

  save(): void {
    if (this.product._id) {
      console.log("update");
      this.serv.putData(this.product.ProductId, this.product).subscribe(
        (resp: Response) => {
          console.log(resp.json().data);
        },
        error => {
          console.log(`Error Occured ${error}`);
        }
      );
    } else {
      console.log("save");
      this.serv.postData(this.product).subscribe(
        (resp: Response) => {
          this.products.push(resp.json().data);
          console.log(resp.json().data);
        },
        error => {
          console.log(`Error Occured ${error}`);
        }
      );
    }
  }

  delete(): void{
    let prodIndex: Array<number> = new Array<number>();
    this.serv.deleteData(this.product.ProductId).subscribe((resp: Response)=>{
    })
  }

  getselectedrow(p: Product): void {
    // 1. create a deep copy of the selected product
    // 2. assign that copy to this.roduct
    this.product = Object.assign({}, p);
  }
  // getChecked(checkVal: Product): void {
  //     console.log(this.count);
  //     if (checkVal.check) {
  //       checkVal.check = false;
  //       this.count = this.count - 1;
  //     } else {
  //       checkVal.check = true;
  //       this.count = this.count + 1;
  //     }
  //     if (this.count == this.products.length) {
  //       this.isChecked = true;
  //     } else {
  //       this.isChecked = false;
  //     }

  //   }

  //   doAllChecks(): void {
  //     if (this.isChecked) {
  //       for (let prod of this.products) {
  //         prod.check = true;
  //       }

  //       this.count = this.products.length;
  //     } else {
  //       for (let prod of this.products) {
  //         prod.check = false;
  //       }

  //       this.count = 0;
  //     }
  //   }

  //     for(let i = prodIndex.length - 1; i>=0;i--){
  //         this.products.splice(prodIndex[i],1);
  //     }
}
