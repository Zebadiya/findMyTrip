import { Injectable } from '@angular/core';
// import { cityName } from '../city';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor( private http: HttpClient) { }

  getCityData () {

    let capitalList,
        idList; 

    this.http.get('./assets/europe.json').subscribe(
      (data: any) => {
        capitalList = data.map( country => country.properties.capital);
        console.log('capitalList', capitalList);
        
      }
    )

    // this.http.get('./assets/citylist.json').subscribe(
    //   (data: any) => {
    //     idList = data.map(function(){ 
    //       for ( let capitalName in capitalList ) {
    //         idItem => idItem.name == capitalName ? idItem.id : false
    //       }
    //     })  
    //     console.log('idList', idList);
    //   }
    // )
  }
}
