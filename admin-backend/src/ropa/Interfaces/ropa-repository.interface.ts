import { Ropa } from "../ropa.model";

export interface IRopaRepository {
    create(ropa: any): Promise<Ropa>;
    findAll(): Promise<Ropa[]>;
    findOneById(id: string): Promise<Ropa>;
    update(id: string, updateRopa: any): Promise<Ropa>;
    delete(id: string): Promise<Ropa>;
  }
  //:)