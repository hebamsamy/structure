import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './Components/users/users.component';
import { VendorsComponent } from './Components/vendors/vendors.component';
import { ProductsComponent } from './Components/products/products.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const AdminRoutes:Routes=[
  {path:"",redirectTo:'dashboard',pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent},
  {path:"vendors",component:VendorsComponent},
  {path:"users",component:UsersComponent},
  {path:"Products",component:ProductsComponent},
]


@NgModule({
  declarations: [
    UsersComponent,
    VendorsComponent,
    ProductsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
