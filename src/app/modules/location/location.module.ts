import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { GpsLocationComponent } from './gps-location/gps-location.component';
import { ReusableModule } from '../reusable/reusable.module';

@NgModule({
  declarations: [GpsLocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    ReusableModule
  ],
  exports: [
    GpsLocationComponent
  ],
})
export class LocationModule { }
