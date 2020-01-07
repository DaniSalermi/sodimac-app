import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VendorAssistModule } from "./modules/vendor-assist/vendor-assist.module";
import { PreHomeModule } from "./modules/pre-home/pre-home.module";

const routes: Routes = [
  {
    path: "asistencia",
    loadChildren: () =>
      import("./modules/vendor-assist/vendor-assist.module").then(
        mod => mod.VendorAssistModule
      )
  },
  {
    path: "bienvenidos",
    loadChildren: () =>
      import("./modules/pre-home/pre-home.module").then(
        mod => mod.PreHomeModule
      )
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
