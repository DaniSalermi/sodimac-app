import { Component, OnInit } from "@angular/core";
import { MyPlanningCrudService } from "src/app/services/my-planning/my-planning-crud.service";
import { AngularFirestore } from "@angular/fire/firestore";
// neccessary import for using the arrayUnion method of firebase
import * as fb from "firebase/app";
import { Product } from "../../my-planning/planning-list/product";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  esto: any;
  oneProduct: any;
  showTheProducts = false;

  constructor(
    public myPlanningCrud: MyPlanningCrudService,
    public afs: AngularFirestore
  ) {}

  ngOnInit() {
    this.getSingleProduct("359886-1");
  }
  getSingleProduct(skuComing) {
    let theProduct: any;
    this.afs
      .collection("products", ref => ref.where("sku", "==", `${skuComing}`))
      .snapshotChanges()
      .subscribe(whatComes => {
        theProduct = whatComes[0].payload.doc.data() as Product;

        this.oneProduct = theProduct;
        this.showTheProducts = true;
        console.log(this.oneProduct);
      });
  }
}
