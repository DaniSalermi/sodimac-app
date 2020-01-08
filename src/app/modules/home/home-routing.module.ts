import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SodimacHomeComponent } from "./sodimac-home/sodimac-home.component";

const routes: Routes = [
  {
    path: "home",
    component: SodimacHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
