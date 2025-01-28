import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { WeatherCategorizationService } from './WeatherCategorizationService';
import { RopaModule } from '../ropa/ropa.module'; // Importa RopaModule
import { HttpModule } from '@nestjs/axios';
import { ApiWeatherService } from './ApiWeatherService';

@Module({
  imports: [RopaModule, HttpModule], // Asegúrate de importar RopaModule
  controllers: [WeatherController],
  providers: [
    WeatherService,
    ApiWeatherService,
    WeatherCategorizationService,
  ],
})
export class WeatherModule {}
