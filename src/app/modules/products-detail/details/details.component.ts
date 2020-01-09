import { Component, OnInit } from "@angular/core";
import { MyPlanningCrudService } from "src/app/services/my-planning/my-planning-crud.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

// neccessary import for using the arrayUnion method of firebase
import * as fb from "firebase/app";
import { Product } from "../../my-planning/planning-list/product";
import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { on } from "cluster";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  oneProduct: any;
  showTheProducts = false;
  currentId: string;

  constructor(
    public myPlanningCrudeService: MyPlanningCrudService,
    private activateRouter: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.currentId = this.activateRouter.snapshot.paramMap.get("id");

    let nId = this.myPlanningCrudeService.getProduct(this.currentId);
    nId.snapshotChanges().subscribe(whatCome => {
      this.oneProduct = whatCome.payload.data();

      this.showTheProducts = true;
    });
  }
}
