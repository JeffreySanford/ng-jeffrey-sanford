//For Current weather   
export class WeatherData {
    public cityName: string = '';
    public description: string = '';
    public currentTemperature: number = -40;
    public minTemperature: number = -80;
    public maxTemperature: number = 100
    public icon: string = '';
}
export class ForecastDetails extends WeatherData {
    name: string = '';
    details: any;
    public date: string = Date.now().toString();
}