// importing extrenal modueles from node-modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// importing the components 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { CarComponent } from './home/car/car.component';
import { TruckComponent } from './home/truck/truck.component';
import { ChooseAutoComponent } from './home/choose-auto/choose-auto.component';
import{SuccessComponent} from './home/success.component'

//importing routing file
import{routing} from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  CarComponent,
    TruckComponent,
    ChooseAutoComponent,
    SuccessComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
