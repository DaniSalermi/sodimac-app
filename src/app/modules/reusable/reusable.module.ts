import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [NavigationBarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent]
})
export class ReusableModule {}
