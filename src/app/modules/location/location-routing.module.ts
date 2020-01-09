import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GpsLocationComponent } from './gps-location/gps-location.component';

const routes: Routes = [
  {
    path: '',
    component: GpsLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
