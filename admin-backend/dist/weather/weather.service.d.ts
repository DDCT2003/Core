import { WeatherCategorizationService } from './WeatherCategorizationService';
import { ApiWeatherService } from './ApiWeatherService';
import { ClothesService } from 'src/ropa/ClothesService';
export declare class WeatherService {
    private readonly apiWeatherService;
    private readonly weatherCategorizationService;
    private readonly clothesService;
    constructor(apiWeatherService: ApiWeatherService, weatherCategorizationService: WeatherCategorizationService, clothesService: ClothesService);
    getClothes(city: string): Promise<any[]>;
    getClothesByAgeAndFormality(city: string, age: number, formalidad: string): Promise<any[]>;
}
