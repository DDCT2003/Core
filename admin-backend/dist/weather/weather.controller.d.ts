import { WeatherService } from './weather.service';
import { Ropa } from '../ropa/schemas/ropa.schema';
export declare class WeatherController {
    private readonly weatherService;
    constructor(weatherService: WeatherService);
    getClothes(city: string): Promise<Ropa[]>;
    getClothesWFA(formalidad: string, edad: number): Promise<Ropa[]>;
}
