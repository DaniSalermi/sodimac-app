import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MyPlanningCrudService } from '../../../services/my-planning/my-planning-crud.service';
import { Plan } from './Plan';

@Component({
  selector: 'app-planning-details',
  templateUrl: './planning-details.component.html',
  styleUrls: ['./planning-details.component.scss']
})
export class PlanningDetailsComponent implements OnInit {
  skuForSearch: any;
  productsArr = [];
currentId: string;
loading: boolean;
planning: any;
  constructor(public planCrudService: MyPlanningCrudService, private route: ActivatedRoute,  private location: Location) { }

  ngOnInit() {
    this.bringTheInterestPlanning();
    this.productsArr = this.planCrudService.productListArr;
  }

  bringTheInterestPlanning() {
    this.currentId = this.route.snapshot.paramMap.get('id');
    this.planCrudService.getList(this.currentId).snapshotChanges().subscribe(planComing => {
      this.planning = planComing.payload.data();
      const planComingNow = planComing.payload.data() as Plan;
      const skuToSearch = planComingNow.products;
      skuToSearch.forEach(element => {
        this.planCrudService.bringProductBySku(element);
      });

      this.loading = true;
      console.log(this.productsArr);
    });
  }


}
