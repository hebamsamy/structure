import { Routes } from '@angular/router';
import { HomeComponent } from './Shared/home/home.component';
import { LandingComponent } from './Shared/landing/landing.component';
import { LoginComponent } from './Shared/login/login.component';
import { RegisterComponent } from './Shared/register/register.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';

export const coreRoutes: Routes = [
  
        {path:"",redirectTo:'home',pathMatch:"full"},
        {path:"home",component:HomeComponent},
        {path:"landing",component:LandingComponent},
        {path:"login",component:LoginComponent},
        {path:"register",component:RegisterComponent},
        // {
        //     path: 'path', 
        //     loadChildren: () => import('lazy-path').then(m => m.lazy-module)
        // },
        {
            path: 'admin', 
            loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule)
        },
        {
            path: 'vendor', 
            loadChildren: () => import('./Vendor/vendor.module').then(m => m.VendorModule)
        },


        {path:"**",component:NotFoundComponent}
      
];
