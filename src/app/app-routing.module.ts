import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: "planning",
    loadChildren: () =>
      import("./modules/my-planning/my-planning.module").then(
        mod => mod.MyPlanningModule
      )
  },
  {
    path: "assistant",
    loadChildren: () =>
      import("./modules/vendor-assist/vendor-assist.module").then(
        mod => mod.VendorAssistModule
      )
  },
  {
    path: "",
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
