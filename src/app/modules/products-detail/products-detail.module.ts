import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsDetailRoutingModule } from "./products-detail-routing.module";
import { DetailsComponent } from "./details/details.component";
import { HeaderComponent } from "../home/header/header.component";
import { HomeModule } from "../home/home.module";

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, ProductsDetailRoutingModule, HomeModule],
  exports: [DetailsComponent]
})
export class ProductsDetailModule {}
