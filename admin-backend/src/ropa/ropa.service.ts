import { Injectable } from '@nestjs/common';
import { RopaValidator } from './Validators/RopaValidator';
import { IRopaRepository } from './Interfaces/ropa-repository.interface';
import { RopaRepositoryFactory } from './factories/ropa-repository.factory';
import { InjectModel } from '@nestjs/mongoose';
import { Ropa } from './ropa.model';
import { Model } from 'mongoose';

@Injectable()
export class RopaService {
  private ropaRepository: IRopaRepository;

  constructor(@InjectModel(Ropa.name) private ropaModel: Model<Ropa>) {}

  async findAll(): Promise<Ropa[]> {
    return this.ropaModel.find().exec(); // 🔹 Verifica que devuelva datos
  }
  async create(ropa: any) {
    RopaValidator.validateEdad(ropa.edad);
    return this.ropaRepository.create(ropa);
  }



  async searchOne(id: string) {
    return this.ropaRepository.findOneById(id);
  }

  async update(id: string, updateRopa: any) {
    RopaValidator.validateEdad(updateRopa.edad);
    return this.ropaRepository.update(id, updateRopa);
  }

  async delete(id: string) {
    return this.ropaRepository.delete(id);
  }
}
