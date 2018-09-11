import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='31ac29a73ce76175f9b8c162da19ac90';
  url;

  constructor( private http: HttpClient ) {
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city,code) {
    return this.http.get( this.url+city+','+code+'&APPID='+this.apiKey ).pipe(map(response => console.log(response) )
    )}
}
