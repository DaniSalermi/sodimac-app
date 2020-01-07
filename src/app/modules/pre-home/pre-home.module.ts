import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PreHomeRoutingModule } from "./pre-home-routing.module";
import { PrehomeComponent } from "./prehome/prehome.component";

@NgModule({
  declarations: [PrehomeComponent],
  imports: [CommonModule, PreHomeRoutingModule],
  exports: [PrehomeComponent]
})
export class PreHomeModule {}
