import { RopaService } from './ropa.service';
import { Ropa } from './ropa.model';
export declare class RopaController {
    private ropaService;
    constructor(ropaService: RopaService);
    create(createRopa: any): Promise<Ropa>;
    findAll(): Promise<Ropa[]>;
    update(id: string, updateRopa: any): Promise<Ropa>;
    searchOne(id: string): Promise<Ropa>;
    delete(id: string): Promise<Ropa>;
}
