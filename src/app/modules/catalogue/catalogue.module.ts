import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { SampleDevCatalogueComponent } from './sample-dev-catalogue/sample-dev-catalogue.component';


@NgModule({
  declarations: [SampleDevCatalogueComponent],
  exports: [SampleDevCatalogueComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]

})
export class CatalogueModule { }
