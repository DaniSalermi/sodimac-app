import { Component, OnInit } from "@angular/core";
import { MyPlanningCrudService } from "src/app/services/my-planning/my-planning-crud.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  oneProduct: any;
  showTheProducts = false;
  currentId: any;

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
