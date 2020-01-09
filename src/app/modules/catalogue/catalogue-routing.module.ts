import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SampleDevCatalogueComponent } from "./sample-dev-catalogue/sample-dev-catalogue.component";

const routes: Routes = [
  {
    path: "",
    component: SampleDevCatalogueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule {}
