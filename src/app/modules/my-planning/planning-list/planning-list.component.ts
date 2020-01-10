import { Component, OnInit } from '@angular/core';
import { MyPlanningCrudService } from 'src/app/services/my-planning/my-planning-crud.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './product';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss']
})
export class PlanningListComponent implements OnInit {
  products: any;
  planLists: any;
  planListProducts: any;
  showMeThePlan = false;
  firstSku: any;
  imgToShow: string;
  allowTheDisplay = false;
  productOfInterest: any;
  showTheProduct = false;
  firstProductsArr = [];

  // propiedad formulario reactivo para recibir el input del usuario
  form = new FormGroup({
    projectName: new FormControl(''),
  });

  constructor(public afs: AngularFirestore, public planCrudService: MyPlanningCrudService) { }

  ngOnInit() {
    this.planCrudService.getPlannings().subscribe(whatComes => {
      this.planLists = whatComes;
      this.planLists.forEach((element, index) => {
        console.log('elemento de la lista, osea cada planning: ', element);
        const firstProduct = element.payload.doc.data().products[0];
        this.firstSku = firstProduct;
        console.log('this is the first sku: ', this.firstSku);
        this.getProduct(this.firstSku);

      });
      console.log('this.planLists: ', this.planLists);
    }
    );

  }



  bringTheProducts() {
    this.planCrudService.getProducts().subscribe(whatComes => {
      this.products = whatComes;
      console.log('this.products: ', this.products);
      this.showMeThePlan = true;
    });
  }


  getProduct(sku) {
    let theProduct: any;
    console.log('está ejecutandose getProduct en el servicio');
    const skuComing = sku;
    console.log('este es el sku que está entrando en la búsqueda en el componente: ', skuComing);
    console.log('this.afs...', this.afs.collection(
      'products', ref => ref.where('sku', '==', `${skuComing}`))
      .snapshotChanges().subscribe(whatComes => whatComes.forEach((element, index) => {
        if (index === 0) {
          theProduct = element.payload.doc.data() as Product;
          this.firstProductsArr.push(theProduct);
          this.showTheProduct = true;
          console.log('este es firstProductsArr : ', this.firstProductsArr);
          console.log('ya tengo el producto en el componente: ', theProduct);
        }
        })));
      }


  // función que crea una nueva lista o proyecto de planificación
  createProject() {
    console.log('creating project list');
  }

}


