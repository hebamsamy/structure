import { Routes } from "@angular/router";
import { AddProductsComponent } from "./Components/add-products/add-products.component";
import { EditProductComponent } from "./Components/edit-product/edit-product.component";
import { ListProductsComponent } from "./Components/list-products/list-products.component";
import { SeeProductComponent } from "./Components/see-product/see-product.component";

export const vendorRoutes:Routes=[
    {path:"",redirectTo:'list',pathMatch:"full"},
    {path:"list",component:ListProductsComponent},
    {path:"see-details/:id",component:SeeProductComponent},
    {path:"add",component:AddProductsComponent},
    {path:"edit/:id",component:EditProductComponent},
  ]
  