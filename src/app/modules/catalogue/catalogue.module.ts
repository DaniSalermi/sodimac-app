import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { SampleDevCatalogueComponent } from './sample-dev-catalogue/sample-dev-catalogue.component';
import { ProductToListComponent } from './product-to-list/product-to-list.component';
import { DetailCatalogueComponent } from './detail-catalogue/detail-catalogue.component';


@NgModule({
  declarations: [SampleDevCatalogueComponent, ProductToListComponent, DetailCatalogueComponent],
  exports: [SampleDevCatalogueComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]

})
export class CatalogueModule { }
