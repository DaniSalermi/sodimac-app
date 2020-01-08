import { Component, OnInit } from '@angular/core';
import { MyPlanningCrudService } from 'src/app/services/my-planning/my-planning-crud.service';


@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss']
})
export class PlanningListComponent implements OnInit {
  products: any;
  planLists: any;
  showMeThePlan = false;

  constructor(public planCrudService: MyPlanningCrudService) { }

  ngOnInit() {
    this.planCrudService.addProduct();
    this.planCrudService.addPlanList();
    this.planCrudService.getPlannings().subscribe(whatComes => {
      this.planLists = whatComes;
      console.log('this.planLists: ', this.planLists);
    }
      );
    this.planCrudService.getProducts().subscribe(whatComes => {
      this.products = whatComes;
      console.log('this.products: ', this.products);
      this.showMeThePlan = true;
    });
  }

}
