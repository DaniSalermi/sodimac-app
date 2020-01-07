import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SodimacHomeComponent } from './sodimac-home/sodimac-home.component';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [SodimacHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OwlModule
  ],
  exports: [
    SodimacHomeComponent
  ],
  providers: [],
  bootstrap: [SodimacHomeComponent]
})
export class HomeModule { }
