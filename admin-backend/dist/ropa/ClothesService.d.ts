import { HttpService } from '@nestjs/axios';
import { Ropa } from './ropa.model';
import { Model } from 'mongoose';
export declare class ClothesService {
    private readonly httpService;
    private clothesModel;
    constructor(httpService: HttpService, clothesModel: Model<Ropa>);
    getClothesByCriteria(clima: string, formalidad?: string, edad?: string): Promise<(import("mongoose").Document<unknown, {}, Ropa> & Ropa & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
