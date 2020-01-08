import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Product } from '../../modules/my-planning/planning-list/product';

@Injectable({
  providedIn: 'root'
})
export class MyPlanningCrudService {

  products: any;
  plannings: any;
  productListArr = [];

  constructor(public afs: AngularFirestore) { }
  // CREATE PRODUCTS AND LISTS //

  // add product to products collection
  // development only
  addProduct() {
    const dataToSave = {
      area: 'Construcción y Reparación',
      branch: 'Gasfitería',
      brand: 'Fas',
      category: 'Griferías',
      img: 'https://res.cloudinary.com/dz3gm9c3w/image/upload/v1578410785/hackathon-sodimac/3598861b_u67as5.png',
      name: 'Monomando Lavaplatos Línea Galia Plus',
      price: 34990,
      sku: '359886-1',
      mockRow: 3
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
      plan_name: 'Remodelar la cocina',
      products: ['372559-6', '540235-2'],
      store: 'Ñuble'
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


  // RETRIEVE OR READ PRODUCTS AND LISTS

  // get products list

  getProducts() {
    return this.products = this.afs.collection('products', ref => ref.orderBy('name', 'asc')).snapshotChanges();
  }

  // get planning lists

  getPlannings() {
    return this.plannings = this.afs.collection('planningLists', ref => ref.orderBy('plan_name', 'asc')).snapshotChanges();
  }


  // get single product dejar comentado por favor

  // getProduct(sku) {
  //   let theProduct: any;
  //   console.log('está ejecutandose getProduct en el servicio');
  //   const skuComing = sku;
  //   console.log('este es el sku que está entrando en la búsqueda en el servicio: ', skuComing);
  //   console.log('this.afs...', this.afs.collection(
  //     'products', ref => ref.where('sku', '==', `${skuComing}`))
  //     .snapshotChanges().subscribe(whatComes => whatComes.forEach(element => {
  //        theProduct = element.payload.doc.data() as Product;
  //        console.log('ya tengo el producto en el servicio: ', theProduct);
  //        theProduct.id = element.payload.doc.id;
  //       })));
  //   return theProduct;
  // }

  // get single list

  getList(id) {
    return this.afs.collection('productLists').doc(id);
  }




}

