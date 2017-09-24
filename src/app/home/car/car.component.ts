import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  {

  constructor(private router:Router ) { }


  CarsArray:any = [];
BaseCarAmount:number = 0;
StolenCar:boolean = false ;
MudType:string = "";
selectMudType: boolean = false;
LicenceNumber:boolean = false ;
register:boolean = false;

regis(){
  this.register = false;
}

// setting the basevalue price of car based on the mudtype of the car 
getMudCondition(value){

  if(value == "mud"){
  this.selectMudType = false;
  this.MudType = value;
    this.BaseCarAmount = 7;

  }else if (value = "No Mud"){
    this.selectMudType = false;
    this.MudType = value;
    this.BaseCarAmount = 5;
  }

}

// redirecting to the success page 
submit(LiNumber, mudtype){

  //check whether user enter the license number 
  if(LiNumber == ''){
   this.LicenceNumber = true;
   return false;
  }

  // car verification 
  if(LiNumber == '1111111' ){
    this.StolenCar = true;
    return false;
  }

  // check whether user selects either one of the mud type value
  if(this.MudType == ""){
    this.selectMudType = true;
    return false;
  }

   // storing the all car numbers 
   this.CarsArray.push(LiNumber);
  let nonRepeatedCar:any = [];
  nonRepeatedCar = this.findSecondTimeCar( this.CarsArray);

  if(this.CarsArray.length - nonRepeatedCar.length == 1){
    this.BaseCarAmount = 3.5;
  }
  this.LicenceNumber = false;
  this.selectMudType = false;
  this.StolenCar = false;
  this.register = true;
  
  //on sucessfull submission of deatils 
//this.router.navigate(['/cart','success']);
  
}

 findSecondTimeCar(arra1) {
  var i,
  len=arra1.length,
  result = [],
  obj = {}; 
  for (i=0; i<len; i++)
  {
  obj[arra1[i]]=0;
  }
  for (i in obj) {
  result.push(i);
  }
  return result;
  }
  
 

}
