import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningListComponent  } from './planning-list/planning-list.component';
import { PlanningDetailsComponent } from './planning-details/planning-details.component';


const routes: Routes = [
  {
    path: '',
    component: PlanningListComponent
  },
  {
    path: 'planning/:id',
    component: PlanningDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPlanningRoutingModule { }
