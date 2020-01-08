import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'planning',
    loadChildren: () =>
    import('./modules/my-planning/my-planning.module').then( mod => mod.MyPlanningModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
