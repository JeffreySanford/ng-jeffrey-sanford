import { AfterContentChecked, AfterContentInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ForecastService } from './forecast.service';
import { StateService } from './state.service';
import { ForecastDetails } from './weather-data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, AfterContentChecked {
  forecastData: ForecastDetails | undefined;
  showCurrent: boolean = true;
  showForecast: boolean = false;
  zipcode: string = '58401'
  forecastService: ForecastService;
  location: any;
  currentTemperature: any;
  feelsLike: any;
  weatherIcon: string = '';
  description: any;
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
    "Jamestown, ND",
    "Los Angeles, CA",
    "Atlanta, GA",
    "Denver, CO"
  ];

  constructor(forecastService: ForecastService, private stateService: StateService, private renderer: Renderer2, private el: ElementRef) {
    this.forecastService = forecastService;
  }

  ngAfterContentChecked() {
    if (this.current.icon !== '') {
      const icon = this.el.nativeElement.querySelector('.wind-icon');
      this.renderer.setStyle(icon, 'transform', 'rotate(' + this.current.wind.deg + 'deg)');
    }
  }

  ngOnInit(): void {

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
      });

      this.forecastService.LoadForecastWeather(this.zipcode).subscribe((data: any)=>{
        
          debugger
          this.forecastData = new ForecastDetails;//Instance to store the Data of ForecastModel
          this.forecastData.name = data.city.name;
          for (var i = 7; i < data.list.length; i = i + 8)//Since we want for 5 days. it Jumps 8 times to get to next day.(A day had 8 details in API.)
          {
            //Instance of type ForecastDetails and stores the data in it.
            var details = new ForecastDetails();
            details.date = data.list[i].dt_txt;
            details.maxTemperature = data.list[i].main.temp_max;
            details.minTemperature = data.list[i].main.temp_min;
            details.description = data.list[i].weather[0].description;
            details.icon = data.list[i].weather[0].icon;
            this.forecastData.details.push(details);//Pushing the data to the to created object
  
          }
        });
  }
}



