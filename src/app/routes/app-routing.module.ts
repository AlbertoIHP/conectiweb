import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


//Componentes
import { LoginComponent } from '../components/login/login.component'



  


const routes: Routes =
[
  //RUTAS MOBILE
  { path: 'login',  component: LoginComponent },

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);

