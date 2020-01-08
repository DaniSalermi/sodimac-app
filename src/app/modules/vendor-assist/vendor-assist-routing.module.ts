import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssistantComponent } from "./assistant/assistant.component";

const routes: Routes = [
  {
    path: "assistant",
    component: AssistantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorAssistRoutingModule {}
