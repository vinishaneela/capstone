import { Component } from '@angular/core';
import { CommodityService } from '../commodity.service';
import { Commodity } from '../commodity';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.css']
})
export class CommodityComponent {
  constructor(private _commoditySrv:CommodityService){}
 
  commodity:Commodity[]=[]
  commodityVar=new Commodity;
  // volume:number=0;
 
  isButtonDisabled=true;
  volumeStr:any;
 
  ngOnInit(){

    this._commoditySrv.getCommodities().subscribe(
      data=>{
        this.commodity=data;
        
        
      },
      error=>{
        console.log(error)
      }
    )
  }
  changeVolume(){
    let volume=prompt("Enter the volume you want to buy")
  }
  inputBuyDisplay(com:Commodity) {
    
    this.volumeStr= prompt("Enter the volume you want to Buy");
    console.log(this.volumeStr)
    com.volume=this.volumeStr
    console.log(com)
    if(this.volumeStr>0 && com.commodityId)
    this.isButtonDisabled=false
    
   
  }
 
  inputSellDisplay(){
   
    
    this.volumeStr = prompt("Enter the volume you want to Sell");
   
  }
  
}
