import { MongoRopaRepository } from './repositories/mongo-ropa.repository';
import { Ropa } from './ropa.model';
export declare class RopaService {
    private ropaRepository;
    constructor(ropaRepository: MongoRopaRepository);
    create(ropa: any): Promise<Ropa>;
    findAll(): Promise<Ropa[]>;
    searchOne(id: string): Promise<Ropa>;
    update(id: string, updateRopa: any): Promise<Ropa>;
    delete(id: string): Promise<Ropa>;
}
