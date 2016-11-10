/**
 * Created by 11200 on 10/16/2016.
 */
import {Component} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, HttpModule,Response} from '@angular/http';
import {Bike} from './bike.model';
import 'rxjs/Rx';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class BikeService {
  private _Url = 'https://feeds.bikesharetoronto.com/stations/stations.json';

  constructor(private _http:Http) { }

  getStations(): Observable<Bike[]> {
    return this._http.get(this._Url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.stationBeanList || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
