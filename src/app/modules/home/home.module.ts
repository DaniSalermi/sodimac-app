import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { SodimacHomeComponent } from "./sodimac-home/sodimac-home.component";
import { OwlModule } from "ngx-owl-carousel";
import { HeaderComponent } from "./header/header.component";
import { ReusableModule } from "../reusable/reusable.module";

@NgModule({
  declarations: [SodimacHomeComponent, HeaderComponent],
  imports: [CommonModule, HomeRoutingModule, OwlModule, ReusableModule],
  exports: [SodimacHomeComponent, HeaderComponent],
  providers: [],
  bootstrap: [SodimacHomeComponent]
})
export class HomeModule {}
