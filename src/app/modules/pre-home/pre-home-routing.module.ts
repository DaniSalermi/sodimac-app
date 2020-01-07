import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrehomeComponent } from "./prehome/prehome.component";

const routes: Routes = [{ path: "Bienvenides", component: PrehomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreHomeRoutingModule {}
