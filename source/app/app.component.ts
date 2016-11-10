import { Component } from '@angular/core';
import {ProductListComponent} from "./product/product.list.component";
import {Product} from "./product/product.model";



@Component({
  selector: 'my-app',
  template: `<h1>Hello... Welcome To My First Angular App</h1>
    <product-list>Product List Goes Here !!</product-list>
    <bike-stations>Loading Bike Stations Here !!</bike-stations>
`
})
export class AppComponent { }
