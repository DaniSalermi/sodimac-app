import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { MyPlanningModule } from "./modules/my-planning/my-planning.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { ReusableModule } from "./modules/reusable/reusable.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MyPlanningModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReusableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
