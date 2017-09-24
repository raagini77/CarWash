import{ModuleWithProviders}from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';


import { CarComponent } from './home/car/car.component';
import { TruckComponent } from './home/truck/truck.component';
import { ChooseAutoComponent } from './home/choose-auto/choose-auto.component';
import{SuccessComponent} from './home/success.component';

export const routes:Routes = [
    {
     
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    
     
     {
        path:'home',
     component:  HomeComponent,
     children:[
         
      
    {
        path:'',
        component:ChooseAutoComponent
     
    },
         {
             path:'car',
             component:CarComponent
         },
            {
                path:'truck',
                component:TruckComponent
            },
            {
                path:'success',
                component:SuccessComponent
            }
     ]
        
     
    }
]

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);