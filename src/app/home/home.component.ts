import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { GetJsonService} from '../get-json.service';
// import { cityName } from '../city';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ GetJsonService ]
})

export class HomeComponent implements OnInit {

  location={
    city: 'London'
  };

  weather: any = { city: {} };
  value: any;
  cityName: object[];

  constructor( private weatherService: WeatherService,
              private getJsonService: GetJsonService) { }

  ngOnInit() {

    this.value=localStorage.getItem('location');

    if (this.value!==null) {
      this.location=JSON.parse(this.value);
    } else {
      this.location={
        city: 'London'
      };
    }

    

    this.weatherService.getWeather(this.location.city).subscribe( (response) => {
      console.log("response",response);
      this.weather = response;
    } )

    let capitalList = this.getJsonService.getCityData();

    for (let capitalItem in capitalList) {
      this.weatherService.getWeather(capitalItem).subscribe( (response) => {
        console.log("response2",response);
        this.weather = response;
      } )
      }
    }
  }

}
