import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ropa, RopaSchema } from '../ropa/schemas/ropa.schema';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Ropa.name) private clothesModel: Model<Ropa>,
  ) {}

  // Método para obtener la temperatura
  async getTemperature(city: string): Promise<number> {
    const apiKey = '83df0b802247f2004794ce2ed9e74b3c'; // Reemplaza con tu clave de la API del clima
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await firstValueFrom(this.httpService.get(url));
    return response.data.main.temp;
  }

  // Método para categorizar la temperatura
  async categorizeTemperature(city: string): Promise<string> {
    const temperature = await this.getTemperature(city);

    if (temperature < 10) {
      return 'frio';
    } else if (temperature >= 10 && temperature <= 25) {
      return 'templado';
    } else {
      return 'caliente';
    }
  }

  async categorizeAge(edad: number): Promise<string> {
    

    if (edad < 18) {
      return 'Niño';
    } else if (edad >= 18 && edad <= 35) {
      return 'Joven';
    } else {
      return 'Adulto';
    }
  }



  // Método para obtener prendas desde MongoDB
  async getClothes(city: string): Promise<Ropa[]> {
    const category = await this.categorizeTemperature('Quito');
    return this.clothesModel.find({ clima: category }).exec(); // Busca prendas según la categoría
  }

  async getClothesbyWFA( edad: number, formalidad:string): Promise<Ropa[]> {
    const category = await this.categorizeTemperature('Quito');
    const Agecategory = await this.categorizeAge(edad);

    return this.clothesModel.find({ clima: category, formalidad:formalidad, edad: Agecategory }).exec(); // Busca prendas según la categoría
  }
}
