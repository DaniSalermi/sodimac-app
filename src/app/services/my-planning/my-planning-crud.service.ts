import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// neccessary import for using the arrayUnion method of firebase
import * as fb from 'firebase/app';
import { Product } from '../../modules/my-planning/planning-list/product';

@Injectable({
  providedIn: 'root'
})
export class MyPlanningCrudService {

  products: any;
  plannings: any;
  productListArr = [];
  productIdToAdd = '';
  listOfInterestId = '';
  skuOfInterest = '';
  productsIdInList = [];
  constructor(public afs: AngularFirestore) {

  }



  // RETRIEVE OR READ PRODUCTS AND LISTS

  // get products list

  getProducts() {
    return this.products = this.afs.collection('products', ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }

  // get single product

  getProductSku(productId) {
    const broughtProd = this.afs.collection('products').doc(productId);
    console.log('este es el producto que se está trayendo: ', broughtProd);
    broughtProd.snapshotChanges().subscribe(unwrappedProd => {
      const product = unwrappedProd.payload.data() as Product;
      this.skuOfInterest = product.sku;
      this.addProducToProject(this.listOfInterestId, this.skuOfInterest);

    });

  }

  // update the project products array

  addProducToProject(projectId, productSku) {
    console.log('este es el id del projecto y el sku a agregar: ', projectId, productSku);
    this.afs.collection('planningLists').doc(projectId).update({
      products: fb.firestore.FieldValue.arrayUnion(productSku)
    });
  }

  // get planning lists

  getPlannings() {
    return this.plannings = this.afs.collection('planningLists', ref => ref.orderBy('plan_name', 'asc')).snapshotChanges();
  }


  // get single product by sku

  bringProductBySku(sku) {
    let theProduct: any;
    const skuComing = sku;
    // let theProducToAdd = {};
    this.afs.collection(
      'products', ref => ref.where('sku', '==', `${skuComing}`))
      .snapshotChanges().subscribe(whatComes => whatComes.forEach(element => {
        theProduct = element.payload.doc.data() as Product;
        console.log('ya tengo el producto en el servicio: ', theProduct);
        this.productListArr.push(theProduct);
      }));
  }

  // get single list

  getList(id) {
    return this.afs.collection('planningLists').doc(id);
  }

  getProduct(id) {
    return this.afs.collection('products').doc(id);
  }



}

