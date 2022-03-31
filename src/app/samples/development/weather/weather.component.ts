import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Alert } from './alert.class';
import { ForecastService } from './forecast.service';
import { StateService } from './state.service';
import { ForecastDetails, Weather } from './weather.class';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, AfterContentChecked {
  forecastData: any;

  showCurrent: boolean = true;
  showForecast: boolean = false;
  zipcode: string = '58401' // initial
  forecastService: ForecastService;
  location = '';
  currentTemperature = '';
  feelsLike = '';
  weatherIcon = '';
  description = '';
  resolved: boolean = false;
  current = {
    main: '',
    icon: '',
    wind: {
      deg: 0,
      speed: 0,
      gust: 0
    }
  }

  cities = [
    {
      name: 'Jamestown, ND',
      zipcode: '58401'
    },
    {
      name: 'Vancouver, WA',
      zipcode: '98607'
    },
    {
      name: 'Los Angeles, CA',
      zipcode: '90035'
    },
    {
      name: 'Atlanta, GA',
      zipcode: '30223'
    },
    {
      name: 'Denver, CO',
      zipcode: '80218'
    }
  ];

  details: any;
  state: string = 'ND';
  alert: any;
  alerts: Alert[] = [];


  constructor(forecastService: ForecastService, private stateService: StateService, private renderer: Renderer2, private el: ElementRef, private cd: ChangeDetectorRef, private http: HttpClient) {
    this.forecastService = forecastService;

    this.forecastService.LoadForecastWeather(this.zipcode).subscribe((data: any) => {
      this.forecastData = new ForecastDetails;//Instance to store the Data of ForecastModel
      this.forecastData.details = [];
      this.forecastData.name = data.city.name;
      for (var i = 7; i < data.list.length; i = i + 8)//Since we want for 5 days. it Jumps 8 times to get to next day.(A day had 8 details in API.)
      {
        //Instance of type ForecastDetails and stores the data in it.
        var details = new ForecastDetails();
        details.date = data.list[i].dt_txt;
        details.maxTemperature = data.list[i].main.temp_max;
        details.minTemperature = data.list[i].main.temp_min;
        details.description = data.list[i].weather[0].description;
        details.icon = 'http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '.png';
        this.forecastData.details.push(details);//Pushing the data to the to created object
      }
    });
  }

  ngAfterContentChecked() {
    if (this.current.icon !== '') {
      const icon = this.el.nativeElement.querySelector('.wind-icon');
      this.renderer.setStyle(icon, 'transform', 'rotate(' + this.current.wind.deg + 'deg)');
    }

    if (this.forecastData && this.forecastData.details) {
      console.log(this.forecastData);
      this.details = this.forecastData.details;

    }
  }

  getAlert(state: string) {
    this.alerts = [];
    const alertObs = this.http.get('https://api.weather.gov/alerts/active?area=' + state.toUpperCase());

    alertObs.subscribe((alert: any) => {
      alert.features.map((feature: any) => {
        this.alerts.push({
          certainty: feature.properties.certainty,
          description: feature.properties.description,
          effective: feature.properties.effective,
          ends: feature.properties.ends,
          event: feature.properties.event,
          expires: feature.properties.expires,
          headline: feature.properties.headline,
          messageType: feature.properties.messageType,
          onset: feature.properties.onset,
          response: feature.properties.response,
          severity: feature.properties.severity,
          status: feature.properties.status,
          urgency: feature.properties.urgency
        });
        console.log(feature.properties.headline)
      });
    })
  }
  ngOnInit(): void {
    this.resolved = false;
    this.forecastService.LoadCurrentWeather(this.zipcode).subscribe(
      data => {
        this.state = this.stateService.getState(this.zipcode);
        this.location = data.name + ', ' + this.state;
        this.currentTemperature = data.main.temp;
        this.feelsLike = data.main.feels_like;
        this.description = data.weather[0].description;
        this.weatherIcon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        this.showCurrent = true;
        this.showForecast = false;

        this.current = {
          main: data.weather[0].main,
          icon: data.weather[0].icon,
          wind: {
            deg: data.wind.deg,
            speed: data.wind.speed,
            gust: data.wind.gust
          }
        }

        this.getAlert(this.state);
      });
  }

  selectCity(city: any) {
    this.zipcode = city.zipcode;

    this.forecastService.LoadCurrentWeather(this.zipcode).subscribe(
      data => {
        this.location = data.name + ', ' + this.stateService.getState(this.zipcode);
        this.currentTemperature = data.main.temp;
        this.feelsLike = data.main.feels_like;
        this.description = data.weather[0].description;
        this.weatherIcon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        this.showCurrent = true;
        this.showForecast = false;

        this.current = {
          main: data.weather[0].main,
          icon: data.weather[0].icon,
          wind: {
            deg: data.wind.deg,
            speed: data.wind.speed,
            gust: data.wind.gust
          }
        }
        this.state = this.stateService.getState(this.zipcode);
        this.getAlert(this.state);
      });
  }
}
