import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WaitlistService {
  private localesCollection: AngularFirestoreCollection<any>;
  private waitlistCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private firebase: AngularFirestore) {
    this.localesCollection = firebase.collection<any>("locales");
    this.waitlistCollection = firebase.collection<any>("waitlist");
    this.items = this.localesCollection.valueChanges();
    this.items.subscribe(locales => {
      console.log(locales);
    });
  }

  // getWaitlistFromHall(hallNumber) {
  //   this.firebase
  //     .collection("locales", ref => ref.where("store", "==", "Ñuble"))
  //     .valueChanges();
  // }

  getHallName() {
    return this.firebase
      .collection("locales", ref => ref.where("store", "==", "Ñuble"))
      .valueChanges();
  }

  addToWailist(name, number, person) {
    let payload = { name, number, person };
    this.waitlistCollection.add(payload);
  }
}
