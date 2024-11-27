import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { Ropa, RopaSchema } from '../ropa/schemas/ropa.schema';

@Module({
  imports: [
    HttpModule, // Asegúrate de importar el HttpModule
    MongooseModule.forFeature([{ name: Ropa.name, schema: RopaSchema }]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
