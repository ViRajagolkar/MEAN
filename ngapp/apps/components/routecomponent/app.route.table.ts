import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./app.home.component";
import { AboutComponent } from "./app.about.component";
import { ContactComponent } from "./app.contact.component";
import { AppGuardService } from "../../services/app.test.guard.service";
import { ErrorComponent } from "./app.error.component";
//import * as data from "./routes.json";

// Define route table
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [AppGuardService]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },

  { path: "error", component: ErrorComponent }
];

//Register the route table for route of the currebt angular/NG app
//When routing is provided to imports of NGModule this will load router module with route table
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
