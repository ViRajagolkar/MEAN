import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from "@angular/router";

@Injectable()
export class AppGuardService implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("CanActivate");
    var isAllow = sessionStorage.getItem("userToken");

    if (isAllow == "" || isAllow == undefined) {
      alert(
        "You are not allowed to view this page. You are redirected to Error page."
      );
      this._router.navigate(["login"]);
      return false;
    } else {
      return true;
    }
    return null;
  }
}
