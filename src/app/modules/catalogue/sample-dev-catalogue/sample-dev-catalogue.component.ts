import { Component, OnInit } from '@angular/core';
import { MyPlanningCrudService } from '../../../services/my-planning/my-planning-crud.service';

@Component({
  selector: 'app-sample-dev-catalogue',
  templateUrl: './sample-dev-catalogue.component.html',
  styleUrls: ['./sample-dev-catalogue.component.scss']
})
export class SampleDevCatalogueComponent implements OnInit {

sampleProducts: any;
showTheProducts = false;
showTheProjectList = false;

  constructor(public planCrudService: MyPlanningCrudService) { }

  ngOnInit() {
    this.planCrudService.getProducts().subscribe( productsComing => {
      this.sampleProducts = productsComing;
      this.showTheProducts = true;
    });
  }

  addProdToList(productIdComing) {
    // alojamos temporalmente el id de interés en un atributo del servicio
    this.planCrudService.productIdToAdd = productIdComing;
    console.log('este es el id que llega: ', productIdComing);
    this.showTheProjectList = true;
  }

}
