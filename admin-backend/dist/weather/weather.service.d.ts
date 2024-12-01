import { Model } from 'mongoose';
import { Ropa } from '../ropa/schemas/ropa.schema';
import { HttpService } from '@nestjs/axios';
export declare class WeatherService {
    private readonly httpService;
    private clothesModel;
    constructor(httpService: HttpService, clothesModel: Model<Ropa>);
    getTemperature(city: string): Promise<number>;
    categorizeTemperature(city: string): Promise<string>;
    categorizeAge(edad: number): Promise<string>;
    getClothes(city: string): Promise<Ropa[]>;
    getClothesbyWFA(edad: number, formalidad: string): Promise<Ropa[]>;
}
