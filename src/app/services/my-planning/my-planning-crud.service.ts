import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MyPlanningCrudService {

  products: any;
  plannings: any;

  constructor(public afs: AngularFirestore) { }

  // add product to products collection
  // development only

  addProduct() {
    const dataToSave = {
      area: 'Construcción y Reparación',
      branch: 'Gasfitería',
      brand: 'Stretto',
      category: 'Griferías',
      name: 'Monoblock lavaplatos inoxidable cobre',
      price: 49990,
      sku: '372559-6',
    };
    this.saveProduct(dataToSave);
  }

  saveProduct(data) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('products')
        .add(data)
        .then(res => {
          console.log('data saved');
        },
          err => reject(err));
    });
  }

  // end of the addProduct functionality for development only


// add list to planList collection
  // development only

  addPlanList() {
    const dataToSave = {
      plan_name: 'Remodelar mi cocina',
      products: ['372559-6', '540235-2', '278302-9' ]
    };
    this.saveList(dataToSave);
  }

  saveList(data) {
    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('planningLists')
        .add(data)
        .then(res => {
          console.log('planning saved');
        },
          err => reject(err));
    });
  }

  // end of the addPlanList functionality for development only




  // get products

  getProducts() {
    return this.products = this.afs.collection('products', ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }

  // get planning list

  getPlannings() {
    return this.plannings = this.afs.collection('planningLists', ref => ref.orderBy('plan_name', 'asc')).snapshotChanges();
  }



}

