import { IRopaRepository } from '../Interfaces/ropa-repository.interface';
import { Ropa } from '../ropa.model';
import { Model } from 'mongoose';
export declare class MongoRopaRepository implements IRopaRepository {
    private ropaModel;
    constructor(ropaModel: Model<Ropa>);
    create(ropa: any): Promise<Ropa>;
    findAll(): Promise<Ropa[]>;
    findOneById(id: string): Promise<Ropa>;
    update(id: string, updateRopa: any): Promise<Ropa>;
    delete(id: string): Promise<Ropa>;
}
