import { WeatherApiInterface } from "./ApiInterface";
import { HttpService } from "@nestjs/axios";
export declare class ApiWeatherService implements WeatherApiInterface {
    private readonly httpService;
    constructor(httpService: HttpService);
    getTemperature(city: string): Promise<number>;
}
