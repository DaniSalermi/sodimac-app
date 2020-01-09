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

  constructor(public planCrudService: MyPlanningCrudService) { }

  ngOnInit() {
    this.planCrudService.getProducts().subscribe( productsComing => {
      this.sampleProducts = productsComing;
      this.showTheProducts = true;
    });
  }

}
