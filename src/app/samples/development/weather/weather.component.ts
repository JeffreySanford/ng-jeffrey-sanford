import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { HeaderService } from 'src/app/header/header.service';
import { Alert } from './alert.class';
import { City } from './city.class';
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

  cities: City[] = [
    {
      name: 'Jamestown, ND',
      zipcode: '58401',
      long: '46.908436',
      lat: '98.705482',
    },
    {
      name: 'Vancouver, WA',
      zipcode: '98607',
      long: '45.6280',
      lat: '122.6739'
    },
    {
      name: 'Los Angeles, CA',
      zipcode: '90035',
      long: '34.0736',
      lat: '118.4004'
    },
    {
      name: 'Atlanta, GA',
      zipcode: '30223',
      long: '33.2468',
      lat: '84.2641'
    },
    {
      name: 'Denver, CO',
      zipcode: '80218',
      long: '39.7392',
      lat: '104.9903'
    }
  ];

  details: any;
  state: string = 'ND';
  alert: any;
  alerts: Alert[] = [];
  city = 'Jamestown, ND';
  isSidebarClosed = true;

  constructor(private headerState: HeaderService, forecastService: ForecastService, private stateService: StateService, private renderer: Renderer2, private el: ElementRef, private cd: ChangeDetectorRef, private http: HttpClient) {
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

      this.cities.map((city: City) => {
        if (city.name === this.city) {
          this.getAlert(this.city)
        }
      });
    }

    this.isSidebarClosed = this.headerState.getSidebarState()
  }

  getAlert(city: string) {
    this.http.get('https://api.weather.gov/alerts/active?area=' + this.state).subscribe((alert: any) => {
      alert.features.map((feature: any) => {
        if(feature.properties.headline.includes(city)) {
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
        }
      });
    });
  }

  ngOnInit(): void {
    this.resolved = false;
    this.forecastService.LoadCurrentWeather(this.zipcode).subscribe(
      data => {
        this.city = data.name;
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

        this.getAlert(data.name);
      });
  }

  selectCity(city: any) {
    this.zipcode = city.zipcode;
    this.alerts = [];
    this.details = [];

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
            this.details = this.forecastData.details;
          }
        });
        this.state = this.stateService.getState(this.zipcode);
        this.getAlert(data.name);

      });
  }
}
