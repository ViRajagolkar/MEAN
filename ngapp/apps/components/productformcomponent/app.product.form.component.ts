import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Product, Categories} from "./app.product.model";
import { ProductLogic } from "./app.product.logic";
import { NumericNonNegativeValidator } from "./../customvalidators/app.custom.validator";

@Component({
    selector: 'app-product-form-component',
    templateUrl: './app.product.form.view.html'
})
export class ProductFormComponent implements OnInit {
    //The OnInit is component Lifecycle Interface
    //This provides ngOnInit() method

    product: Product;
    private logic: ProductLogic;
    products: Array<Product>;
    //categories locally
    categories = Categories;
    tableHeaders: Array<string>;
    isSaved : boolean;
     //Define FormGroup
    frmProduct : FormGroup;

    constructor() { 
        this.product = new Product(0,"","",0);
        this.logic = new ProductLogic();
        this.products = new Array<Product>();
        this.tableHeaders = new Array<string>();
        this.isSaved = false;
        // Define an instance of FormGroup and map property of model class 
        //i.e Product class with FormCOntrol
        this.frmProduct = new FormGroup({
            ProductId : new FormControl(this.product.ProductId, 
            Validators.compose([
                Validators.required,
                Validators.pattern("[0-9]+"),
                Validators.minLength(2),
                Validators.maxLength(5)
            ])
          ),
            ProductName : new FormControl(this.product.ProductName,
                Validators.compose([
                    //Validators.pattern("[A-Z]*"),
                    Validators.pattern("[A-Z]+[a-z]*")]
                )
            ),
            CategoryName : new FormControl(this.product.CategoryName, Validators.required),
            Price: new FormControl(
                this.product.Price,
                Validators.compose([NumericNonNegativeValidator.checkVal])
            )
        });
    }

    //The method will be invoked immediately after constructor
    ngOnInit(): void { 
        //read all properties of product class and push them in table array
        for(let p in this.product){
            this.tableHeaders.push(p);
        }

        this.products = this.logic.getProducts();
    }
    
    clear():void{
        this.product = new Product(0, "", "",0);
    }

    save():void {
        // read form values using "fromControlName" under 
        this.product = this.frmProduct.value;
        this.products = this.logic.saveProduct(this.product);
        this.isSaved = false;
       // alert(JSON.stringify(this.product));
    }

    loadForm(): void {
        this.product= new Product(0, "", "",0);
        this.isSaved = true;
    }

     getselectedrow(p: Product): void {
         // 1. create a deep copy of the selected product
         // 2. assign that copy to this.roduct
         this.product = Object.assign({},p);
     }
}
