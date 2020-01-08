import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [NavigationBarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationBarComponent, FooterComponent]
})
export class ReusableModule {}
