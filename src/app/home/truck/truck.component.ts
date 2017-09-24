
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent  {

  constructor(private router:Router) { }
  truckArray:any = [];
register:boolean = false;
TrucksArray:any = []; 
BaseTruckAmount:number = 0;
StolenTruck:boolean = false ;
BedType:string = "";
selectBedType: boolean = false;
LicenceNumber:boolean = false ;

regis(){
  this.register = false;
}
// setting the basevalue price of car based on the mudtype of the car 
getBedCondition(value){

  if(value == "Yes"){
  alert("we don't accept trucks with bed let down")

  }else if (value = "No"){
     this.selectBedType = false;
  this.BedType = value;
    this.BaseTruckAmount = 10;
  }
 
}

// redirecting to the success page 
submit(LiNumber, Bedtype){

  //check whether user enter the license number 
  if(LiNumber == ''){
   this.LicenceNumber = true;
   return false;
  }

  // car verification 
  if(LiNumber == '1111111' ){
    this.StolenTruck = true;
    return false;
  }

  // check whether user selects either one of the mud type value
  if(this.BedType == ""){
    this.selectBedType = true;
    return false;
  }

   // storing the all trck numbers 
   this.truckArray.push(LiNumber);
  let nonRepeatedCar:any = [];
  nonRepeatedCar = this.findSecondTimeTruck( this.truckArray);

  if(this.truckArray.length - nonRepeatedCar.length == 1){
    this.BaseTruckAmount = 5;
  }
  this.register= true;
  //on sucessfull submission of deatils 
//this.router.navigate(['/home','success']);
  
}

 findSecondTimeTruck(arra1) {
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


