import { Injectable } from '@nestjs/common';
import { MongoRopaRepository } from './Repositories/mongo-ropa.repository';
import { Ropa } from './ropa.model';
import { RopaValidator } from './Validators/RopaValidator';

@Injectable()
export class RopaService {
  constructor(private ropaRepository: MongoRopaRepository) {} 

  async create(ropa: any) {
    RopaValidator.validateEdad(ropa.edad);
    return this.ropaRepository.create(ropa);
  }

  async findAll(): Promise<Ropa[]> {
    return this.ropaRepository.findAll();
  }

  async searchOne(id: string): Promise<Ropa> {
    return this.ropaRepository.findOneById(id);
  }

  async update(id: string, updateRopa: any): Promise<Ropa> {
    RopaValidator.validateEdad(updateRopa.edad);
    return this.ropaRepository.update(id, updateRopa);
  }

  async delete(id: string): Promise<Ropa> {
    return this.ropaRepository.delete(id);
  }
}
