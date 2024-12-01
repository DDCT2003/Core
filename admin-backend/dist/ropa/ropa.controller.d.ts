import { RopaService } from './ropa.service';
import { Ropa } from './schemas/ropa.schema';
export declare class RopaController {
    private ropaService;
    constructor(ropaService: RopaService);
    create(createRopa: any): Promise<import("mongoose").Document<unknown, {}, Ropa> & Ropa & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<Ropa[]>;
    update(id: string, updateRopa: any): Promise<Ropa>;
    searchOne(id: string): Promise<Ropa>;
    delete(id: string): Promise<Ropa>;
}
