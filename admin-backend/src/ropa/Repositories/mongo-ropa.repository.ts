import { Injectable } from '@nestjs/common';
import { IRopaRepository } from '../Interfaces/ropa-repository.interface';
import { Ropa } from '../ropa.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
@Injectable()
export class MongoRopaRepository implements IRopaRepository {
  constructor(@InjectModel(Ropa.name) private ropaModel: Model<Ropa>) {}

  async create(ropa: any): Promise<Ropa> {
    const newRopa = new this.ropaModel(ropa);
    return newRopa.save();
  }

  async findAll(): Promise<Ropa[]> {
    return this.ropaModel.find().exec();
  }

  async findOneById(id: string): Promise<Ropa> {
    return this.ropaModel.findById(id).exec();
  }

  async update(id: string, updateRopa: any): Promise<Ropa> {
    return this.ropaModel
      .findByIdAndUpdate(id, updateRopa, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Ropa> {
    return this.ropaModel.findByIdAndDelete(id).exec();
  }
}
