/**
 * Created by 11200 on 10/16/2016.
 */


export class  Bike{

  private id:number;
  private stationName:string;
  private availableDocks:number;
  private totalDocks:number;
  private latitude:number;
  private longitude:number;
  private statusValue:number;
  private statusKey:number;
  private status:string;
  private availableBikes:number;
  private stAddress1:string;
  private stAddress2:string;
  private city:string;
  private postalCode:string;
  private location:string;
  private altitude:string;
  private testStation:boolean;
  private lastCommunicationTime:Date;
  private is_renting:boolean;
  private landMark:string;

  constructor(bike_info: Array<any>){

  this.id=bike_info['id'];
    this.stationName=bike_info['stationName'];
    this.availableDocks=bike_info['availableDocks'];
    this.totalDocks=bike_info['totalDocks'];
    this.latitude=bike_info['latitude'];
    this.longitude=bike_info['longitude'];
    this.statusValue=bike_info['statusValue'];
    this.statusKey=bike_info['statusKey'];
    this.status=bike_info['status'];
    this.availableBikes=bike_info['availableBikes'];
    this.stAddress1=bike_info['stAddress1'];
    this.stAddress2=bike_info['stAddress2'];
    this.city=bike_info['city'];
    this.postalCode=bike_info['postalCode'];
    this.location=bike_info['location'];
    this.altitude=bike_info['altitude'];
    this.testStation=bike_info['testStation'];
    this.lastCommunicationTime=bike_info['lastCommunicationTime'];
    this.is_renting=bike_info['is_renting'];
    this.landMark=bike_info['landMark'];
  }
}
