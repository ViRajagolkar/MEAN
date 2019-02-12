import { Component, OnInit } from '@angular/core';
import { Product, Categories} from "./app.product.model";
import { ProductLogic } from "./app.product.logic";

@Component({
    selector: 'app-product-component',
    templateUrl: './app.product.view.html'
})
export class ProductComponent implements OnInit {
    //The OnInit is component Lifecycle Interface
    //This provides ngOnInit() method

    product: Product;
    private logic: ProductLogic;
    products: Array<Product>;
    //categories locally
    categories = Categories;
    tableHeaders: Array<string>;
    isChecked: Boolean;
    count : number;
    check: boolean;

    constructor() { 
        this.product = new Product(0,"","",0);
        this.logic = new ProductLogic();
        this.products = new Array<Product>();
        this.tableHeaders = new Array<string>();
        this.isChecked = false;
    }

    //The method will be invoked immediately after constructor
    ngOnInit(): void { 
        //read all properties of product class and push them in table array
        for (let p in this.product) {
            if(p!='check'){
                this.tableHeaders.push(p);
            }
        }

        this.products = this.logic.getProducts();
    }
    
    clear():void{
        this.product = new Product(0, "", "",0);
    }

    save():void {
        this.products = this.logic.saveProduct(this.product);
       // alert(JSON.stringify(this.product));
    }
    getselectedrow(p: Product): void {
        // 1. create a deep copy of the selected product
        // 2. assign that copy to this.roduct
        this.product = Object.assign({},p);
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

    //   deleteSelected(): void{
    //     let prodIndex: Array<number> = new Array<number>();
    //     for(let p of this.products){
    //         if(p.check){
    //             prodIndex.push(this.products.indexOf(p));
    //         }
    //     }
  
    //     for(let i = prodIndex.length - 1; i>=0;i--){
    //         this.products.splice(prodIndex[i],1);
    //     }
}
