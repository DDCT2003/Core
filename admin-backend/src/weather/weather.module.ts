import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { WeatherCategorizationService } from './WeatherCategorizationService';
import { RopaModule } from '../ropa/ropa.module'; // Importa RopaModule
import { HttpModule } from '@nestjs/axios';
import { ApiWeatherService } from './ApiWeatherService';
import { ClothesService } from 'src/ropa/ClothesService';
import { RopaService } from 'src/ropa/ropa.service';

@Module({
  imports: [RopaModule, HttpModule], 
  controllers: [WeatherController],
  providers: [
    WeatherService,
    ApiWeatherService,
    WeatherCategorizationService
  ],
  exports: [WeatherService],

})
export class WeatherModule {}
