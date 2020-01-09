import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPlanningRoutingModule } from './my-planning-routing.module';
import { PlanningListComponent } from './planning-list/planning-list.component';
import { PlanningDetailsComponent } from './planning-details/planning-details.component';


@NgModule({
  declarations: [PlanningListComponent, PlanningDetailsComponent],
  exports: [PlanningListComponent],
  imports: [
    CommonModule,
    MyPlanningRoutingModule,

  ],
})
export class MyPlanningModule { }
