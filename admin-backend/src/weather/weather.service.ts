import { Injectable } from '@nestjs/common';
import { WeatherCategorizationService } from './WeatherCategorizationService';
import { ApiWeatherService } from './ApiWeatherService';
import { ClothesService } from 'src/ropa/ClothesService';

@Injectable()
export class WeatherService {
  constructor(
    private readonly apiWeatherService: ApiWeatherService,
    private readonly weatherCategorizationService: WeatherCategorizationService,
    private readonly clothesService: ClothesService,
  ) {}

  async getClothes(city: string): Promise<any[]> {
    const temperature = await this.apiWeatherService.getTemperature(city);
    console.log(temperature)
    const category = this.weatherCategorizationService.categorizeTemperature(temperature);
    return this.clothesService.getClothesByCriteria(category);
  }

  // ✅ Asegúrate de que este método esté definido correctamente
  async getClothesByAgeAndFormality(city: string, age: number, formalidad: string): Promise<any[]> {
    const temperature = await this.apiWeatherService.getTemperature(city);
    const tempCategory = this.weatherCategorizationService.categorizeTemperature(temperature);
    const ageCategory = this.weatherCategorizationService.categorizeAge(age);

    return this.clothesService.getClothesByCriteria(tempCategory, formalidad, ageCategory);
  }
}
