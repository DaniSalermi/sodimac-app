import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NavigationBarComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationBarComponent, FooterComponent, HeaderComponent]
})
export class ReusableModule {}
