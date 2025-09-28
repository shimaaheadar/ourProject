import { Routes } from '@angular/router';
import { AddProductComponent } from './dashBord/component/add-product/add-product.component';
import { ProjectDashBordComponent } from './dashBord/component/project-dash-bord/project-dash-bord.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:"product/:id",component:AddProductComponent},
  {path:"dashBord",component:ProjectDashBordComponent},
  //{path:"",component:ProjectDashBordComponent},
   { path: '', component: HomeComponent },       
  { path: "dashbard", component: ProjectDashBordComponent },

//'./dashBord/component/project-dash-bord/project-dash-bord.component';

];
