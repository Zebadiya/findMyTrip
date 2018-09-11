import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location={
    city: 'London',
    code: 'uk'
  };

  constructor( private _weatherService: WeatherService ) { }

  ngOnInit() {
    this._weatherService.getWeather(this.location.city, this.location.code).subscribe( (response) => {
      console.log(response);
    } )
  }

}
