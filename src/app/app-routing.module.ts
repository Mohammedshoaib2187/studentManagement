import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent,
    
  },
  {
    path : "user-list",
    component : UserListComponent
  },
  {
    path : "user-create",
    component : UserCreateComponent
  },
  {
    path : "user-edit/:id", // user-edit/aabbb
    component : UserEditComponent
  },
  {
    path : "product-list",
    component : ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
