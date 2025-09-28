import { Routes } from '@angular/router';
import { AddProductComponent } from './dashBord/component/add-product/add-product.component';
import { ProjectDashBordComponent } from './dashBord/component/project-dash-bord/project-dash-bord.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { ProductsListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
>>>>>>> 292245389b31502566b550edcab573e5fce3e5ef

export const routes: Routes = [
  {path:"product/:id",component:AddProductComponent},
  {path:"dashBord",component:ProjectDashBordComponent},
<<<<<<< HEAD
  //{path:"",component:ProjectDashBordComponent},
   { path: '', component: HomeComponent },       
  { path: "dashbard", component: ProjectDashBordComponent },
=======
  {path:"cart",component:CartComponent},
  {path:"",component:ProductsListComponent},

>>>>>>> 292245389b31502566b550edcab573e5fce3e5ef

//'./dashBord/component/project-dash-bord/project-dash-bord.component';

];
