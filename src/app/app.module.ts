import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommodityComponent } from './commodity/commodity.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from  '@angular/common/http';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { BondComponent } from './bond/bond.component';
import { MutualfundPipe } from './mutualfund.pipe';
import {MatCardModule} from '@angular/material/card';
import { DetailsComponent } from './details/details.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MiraeDetailsComponent } from './mirae-details/mirae-details.component';
import { ItiDetailsComponent } from './iti-details/iti-details.component';
import { AxisComponent } from './axis/axis.component';

@NgModule({
  declarations: [
    AppComponent,
    CommodityComponent,
    NavbarComponent,
    MutualFundComponent,
    RealEstateComponent,
    BondComponent,
    MutualfundPipe,
    DetailsComponent,
    MiraeDetailsComponent,
    ItiDetailsComponent,
    AxisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    BrowserModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
