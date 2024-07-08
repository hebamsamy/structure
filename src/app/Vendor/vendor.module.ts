import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { SeeProductComponent } from './Components/see-product/see-product.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { vendorRoutes } from './vendor.route';


@NgModule({
  declarations: [
    AddProductsComponent,
    EditProductComponent,
    SeeProductComponent,
    ListProductsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vendorRoutes)
  ]
})
export class VendorModule { }
