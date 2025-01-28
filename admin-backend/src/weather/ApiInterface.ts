export interface WeatherApiInterface {
    getTemperature(city: string): Promise<number>;
  }
  