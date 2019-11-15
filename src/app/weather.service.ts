import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  headerOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:8100"
    })
  };

  constructor(private httpClient: HttpClient) {}
  device = null;

  getWeatherFromApi(city: string) {
      return this.httpClient.get(
        `http://api.weatherstack.com/current?access_key=90f2a232385fe254f872289537a963db&query=${city}`
      );
  }
}
