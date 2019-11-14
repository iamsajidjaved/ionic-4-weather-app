import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   headerOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private httpClient: HttpClient) {}

  getWeatherFromApi(city: string){
    return this.httpClient.get(`http://api.weatherstack.com/current?access_key=90f2a232385fe254f872289537a963db&query=${city}`);
  }
}
