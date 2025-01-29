import { Injectable } from "@nestjs/common";
import { WeatherApiInterface } from "./ApiInterface";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { Console } from "console";

@Injectable()
export class ApiWeatherService implements WeatherApiInterface {
  constructor(private readonly httpService: HttpService) {}

  async getTemperature(city: string): Promise<number> {
    const apiKey = '83df0b802247f2004794ce2ed9e74b3c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data.main.temp;
  }
}
