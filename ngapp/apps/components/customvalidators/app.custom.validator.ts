import { AbstractControl, FormControl } from "@angular/forms";
import { UpperCasePipe } from "@angular/common";
import { stringify } from "querystring";
import { ProductFormComponent } from "./../productformcomponent/app.product.form.component"

export class NumericNonNegativeValidator {
  // 1. static method
  // 2. i/p parameter must be used carefully
  // 3. return type is "any"
  static checkVal(ctrl: AbstractControl): any {
    if (parseInt(ctrl.value) > 0) {
      return null; // valid
    } else {
      return { invalid: true }; // imvalid
    }
  }

    static verifyDuplicate(ctrl : AbstractControl): any{
      // var val, i;
      // var p : ProductFormComponent;
      // val= p.product.ProductId.toString;
      // for(i=0; i < val.length; i++){
      //     if(ctrl.value === val[i]){
      //       return {invalid: true}
      //     } else{
      //       return null;
      //     }
      // }
      
    }
  // static checkCase(ctrl: AbstractControl): any {
  //   let val : string = ctrl.value;
  //   if(val.charAt(0).toUpperCase() == val.charAt(0)){
  //     return null;
  //   } else {
  //     return { inavlid: true};
  //   }
//}
}
