//1. Angular Module File
import { NgModule } from "@angular/core";
//2. Import all standard modules
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
//3. Import all components and directives
import { LoginComponent } from "./components/appjwtcomponent/app.login.component";
import { RegistrationComponent } from "./components/appjwtcomponent/app.registration.component";
import { MainjwtComponent } from "./components/appjwtcomponent/app.main.user.component";
import { ErrorjwtComponent } from "./components/appjwtcomponent/app.error.jwt.component";
import { routing } from "./components/appjwtcomponent/app.jwt.route.table"
import { AppGuardService } from "./services/app.test.guard.service";
import { UserService } from "./services/app.jwt.user.service";
import { ProductComponent } from "./components/appjwtcomponent/app.product.component";
import { ProductService } from "./services/app.jwt.products.service";
import { PipedComponent } from "./components/apppipes/app.piped.component";
import { ProductFormComponent } from "./components/productformcomponent/app.product.form.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    ProductComponent,
    LoginComponent,
    RegistrationComponent,
    ErrorjwtComponent,
    MainjwtComponent,
    ProductFormComponent
  ],
  providers: [AppGuardService, UserService, ProductService],
  bootstrap: [ProductFormComponent]
})
export class AppModule {}
//5. Making the AppModule as BootStrap
platformBrowserDynamic().bootstrapModule(AppModule);
