import { Injectable } from "@nestjs/common";

@Injectable()
export class WeatherCategorizationService {
  categorizeTemperature(temperature: number): string {
    if (temperature < 10) {
      return 'frio';
    } else if (temperature >= 10 && temperature <= 25) {
      return 'templado';
    } else {
      return 'caliente';
    }
  }

  categorizeAge(age: number): string {
    if (age < 18) {
      return 'Niño';
    } else if (age >= 18 && age <= 35) {
      return 'Joven';
    } else {
      return 'Adulto';
    }
  }
}
