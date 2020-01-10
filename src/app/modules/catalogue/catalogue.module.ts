import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { SampleDevCatalogueComponent } from './sample-dev-catalogue/sample-dev-catalogue.component';
import { ProductToListComponent } from './product-to-list/product-to-list.component';


@NgModule({
  declarations: [SampleDevCatalogueComponent, ProductToListComponent],
  exports: [SampleDevCatalogueComponent, ProductToListComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]

})
export class CatalogueModule { }
