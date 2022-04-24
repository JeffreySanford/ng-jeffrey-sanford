import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastDetails } from './weather.class';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  forecastData!: ForecastDetails;
  showCurrent: boolean = true;
  showForecast: boolean = true;
  zipcode!: string;
  forecastDetails!: Array<ForecastDetails>;

  constructor(private http: HttpClient) {}

  LoadForecastWeather(zip: any): Observable<any> {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/forecast?zip=' +
        zip +
        ',us&APPID=dabc2b57d81c4493c08ab63bb4d9e326&units=imperial'
    );
  }

  LoadCurrentWeather(zip: any): Observable<any> {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?zip=' +
        zip +
        ',us&APPID=dabc2b57d81c4493c08ab63bb4d9e326&units=imperial'
    );
  }
}
