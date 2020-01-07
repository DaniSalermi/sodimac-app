import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VendorAssistModule } from "./modules/vendor-assist/vendor-assist.module";
import { PreHomeModule } from "./modules/pre-home/pre-home.module";
import { ReusableModule } from "./modules/reusable/reusable.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    VendorAssistModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PreHomeModule,
    ReusableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
