import { NgModule,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlanningRoutingModule } from './my-planning-routing.module';
import { PlanningListComponent } from './planning-list/planning-list.component';


@NgModule({
  declarations: [PlanningListComponent],
  exports: [PlanningListComponent],
  imports: [
    CommonModule,
    MyPlanningRoutingModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MyPlanningModule { }
