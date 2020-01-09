import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsDetailRoutingModule } from "./products-detail-routing.module";
import { DetailsComponent } from "./details/details.component";
import { HeaderComponent } from "../home/header/header.component";
import { HomeModule } from "../home/home.module";
import { ReusableModule } from "../reusable/reusable.module";

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    ProductsDetailRoutingModule,
    HomeModule,
    ReusableModule
  ],
  exports: [DetailsComponent]
})
export class ProductsDetailModule {}
