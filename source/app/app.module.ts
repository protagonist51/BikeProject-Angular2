import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './product/product.list.component';
import { HttpModule, JsonpModule } from '@angular/http'
import { AppComponent }  from './app.component';
import {CollapseExpandpipe} from "./common/pipes/collapseexpandpipe";
import {BikeService} from "./bike/bike.list.service";
import {Bike} from "./bike/bike.model";
import {BikeComponent} from "./bike/bike.component";

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, ProductListComponent, CollapseExpandpipe, BikeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
