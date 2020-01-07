import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningListComponent  } from './planning-list/planning-list.component';


const routes: Routes = [
  {
    path: '',
    component: PlanningListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPlanningRoutingModule { }
