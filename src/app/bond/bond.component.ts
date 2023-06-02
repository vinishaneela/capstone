import { Component } from '@angular/core';
import { Bond } from '../bond.model';
import { BondService } from '../bond.service';

@Component({
  selector: 'app-bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.css']
})
export class BondComponent {
  bondDetails:Bond[]=[];
  constructor(private _bondSrv:BondService){}
  ngOnInit(){
    this._bondSrv.getBondDetails().subscribe(
       data=>{
        this.bondDetails=data;
       },
       error=>{
        console.log(error);
       }
    )
  }
  changeVolume(){
    let volume=prompt("Enter the volume of bonds you want to buy:")
  }
  getVolume(bond:Bond){
    console.log(bond)
    this._bondSrv.postBond(bond).subscribe(
      data=>{
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )
  }
  
}
