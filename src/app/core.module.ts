import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingComponent } from './Shared/landing/landing.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { LoginComponent } from './Shared/login/login.component';
import { RegisterComponent } from './Shared/register/register.component';
import { HomeComponent } from './Shared/home/home.component';
import { RouterModule } from '@angular/router';
import { coreRoutes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(coreRoutes)
  ],
  bootstrap:[AppComponent]
})
export class CoreModule { }
