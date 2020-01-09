import { Component, OnInit } from '@angular/core';
import { MyPlanningCrudService } from '../../../services/my-planning/my-planning-crud.service';


@Component({
  selector: 'app-product-to-list',
  templateUrl: './product-to-list.component.html',
  styleUrls: ['./product-to-list.component.scss']
})
export class ProductToListComponent implements OnInit {

  planningsList: any;
  showTheList = false;
  leTheUserKnow = false;

  constructor(public planCrudService: MyPlanningCrudService) { }

  ngOnInit() {
    this.planCrudService.getPlannings().subscribe( planningsC => {
      this.planningsList = planningsC;
      console.log('this.planningList', this.planningsList);
      this.showTheList = true;
    });
  }

  addToThisList(listIdComing) {
    console.log('vamos a agregar este producto: ', this.planCrudService.productIdToAdd);
    console.log('a esta lista: ', listIdComing);
    // asignamos el id de la lista temporalmente a un atributo en el servicio
    this.planCrudService.listOfInterestId = listIdComing;
    // arrancamos la cascada de funciones para actualizar la lista en el servicio
    this.planCrudService.getProductSku(this.planCrudService.productIdToAdd);
    this.leTheUserKnow = true;
  }

}
