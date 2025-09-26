import { Routes } from '@angular/router';
import { AddProductComponent } from './dashBord/component/add-product/add-product.component';
import { ProjectDashBordComponent } from './dashBord/component/project-dash-bord/project-dash-bord.component';

export const routes: Routes = [
  {path:"product/:id",component:AddProductComponent},
  {path:"dashBord",component:ProjectDashBordComponent},
  {path:"",component:ProjectDashBordComponent},



];
