/**
 * Created by 11200 on 10/16/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Bike} from './bike.model';
import {BikeService} from './bike.list.service';

@Component( {
  selector:'bike-stations',
  templateUrl:'../app/bike/view/bike-list.view.html',
  providers:[BikeService]
})

export class BikeComponent implements OnInit {

  stations:Bike[];
  errorMessage:any;
  mode = 'Observable';

  constructor(private _bikeListService: BikeService) {
    this.stations=[];
  }

  ngOnInit() {
    this.getStations();
  }

  getStations() {
    this._bikeListService.getStations().subscribe(
      (stations: any) => this.stations = stations,
      (error: any) => this.errorMessage = error
    );
  }
}
