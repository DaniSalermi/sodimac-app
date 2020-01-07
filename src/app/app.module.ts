import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MyPlanningModule } from "./modules/my-planning/my-planning.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReusableModule } from "./modules/reusable/reusable.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyPlanningModule, AppRoutingModule, ReusableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
