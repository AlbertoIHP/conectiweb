import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


//Componentes
import { LoginComponent } from '../components/login/login.component'
import { HomeComponent } from '../components/home/home.component'






const routes: Routes =
[
  //RUTAS MOBILE
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: '',  component: HomeComponent },

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);

