import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BondComponent } from './bond/bond.component';
import { CommodityComponent } from './commodity/commodity.component';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { DetailsComponent } from './details/details.component';
import { MiraeDetailsComponent } from './mirae-details/mirae-details.component';
import { ItiDetailsComponent } from './iti-details/iti-details.component';
import { AxisComponent } from './axis/axis.component';

const routes: Routes = [
  {path:'', redirectTo:'bond', pathMatch:'full' },
  {path:'bond', component:BondComponent},
  {path:'commodity', component:CommodityComponent},
  {path:"mutual-fund", component:MutualFundComponent},
  {path:"real-estate", component:RealEstateComponent},
  {path:"details",component:DetailsComponent},
  {path:"miraedetails",component:MiraeDetailsComponent},
  {path:"itidetails",component:ItiDetailsComponent},
  {path:"axis",component:AxisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
