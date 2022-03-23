//For Current weather   
export class Weather {
    public cityName: string = '';
    public description: string = '';
    public currentTemperature: number = -40;
    public minTemperature: number = -80;
    public maxTemperature: number = 100
    public icon: string = '';
}
export class ForecastDetails extends Weather {
    name: string = '';
    details: Array<Weather> = [];
    public date: string = Date.now().toString();
}