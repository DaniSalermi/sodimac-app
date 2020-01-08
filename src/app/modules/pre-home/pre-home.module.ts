import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PreHomeRoutingModule } from "./pre-home-routing.module";
import { PrehomeComponent } from "./prehome/prehome.component";
import { ReusableModule } from "../reusable/reusable.module";

@NgModule({
  declarations: [PrehomeComponent],
  imports: [CommonModule, PreHomeRoutingModule, ReusableModule]
})
export class PreHomeModule {}
