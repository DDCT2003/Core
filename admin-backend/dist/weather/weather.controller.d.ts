import { WeatherService } from './weather.service';
import { Ropa } from 'src/ropa/ropa.model';
export declare class WeatherController {
    private readonly weatherService;
    constructor(weatherService: WeatherService);
    getClothes(city: string): Promise<Ropa[]>;
    getClothesWFA(formalidad: string, edad: number): Promise<Ropa[]>;
}
