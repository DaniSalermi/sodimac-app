import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReusableModule } from "./modules/reusable/reusable.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReusableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
