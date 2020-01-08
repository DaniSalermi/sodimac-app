import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VendorAssistRoutingModule } from "./vendor-assist-routing.module";
import { AssistantComponent } from "./assistant/assistant.component";
import { ReusableModule } from "../reusable/reusable.module";
import { HomeModule } from "../home/home.module";

@NgModule({
  declarations: [AssistantComponent],
  imports: [
    CommonModule,
    VendorAssistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReusableModule,
    HomeModule
  ],
  exports: [AssistantComponent]
})
export class VendorAssistModule {}
