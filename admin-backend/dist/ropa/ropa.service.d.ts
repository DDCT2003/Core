import { Ropa } from './ropa.model';
import { Model } from 'mongoose';
export declare class RopaService {
    private ropaModel;
    private ropaRepository;
    constructor(ropaModel: Model<Ropa>);
    findAll(): Promise<Ropa[]>;
    create(ropa: any): Promise<Ropa>;
    searchOne(id: string): Promise<Ropa>;
    update(id: string, updateRopa: any): Promise<Ropa>;
    delete(id: string): Promise<Ropa>;
}
