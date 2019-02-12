import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { LoginComponent } from "./app.login.component";
import { RegistrationComponent } from "./app.registration.component";
import { ErrorjwtComponent } from "./app.error.jwt.component";
import { ProductComponent } from "./app.product.component";
import { AppGuardService } from "../../services/app.test.guard.service";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "product", component: ProductComponent, canActivate: [AppGuardService]},
  { path: "error", component: ErrorjwtComponent },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
