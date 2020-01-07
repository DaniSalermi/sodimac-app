import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorAssistRoutingModule } from './vendor-assist-routing.module';
import { AssistantComponent } from './assistant/assistant.component';


@NgModule({
  declarations: [AssistantComponent],
  imports: [
    CommonModule,
    VendorAssistRoutingModule
  ]
})
export class VendorAssistModule { }
