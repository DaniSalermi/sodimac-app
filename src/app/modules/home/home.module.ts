import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SodimacHomeComponent } from './sodimac-home/sodimac-home.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SodimacHomeComponent, HeaderComponent],
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