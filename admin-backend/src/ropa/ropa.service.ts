import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ropa } from './schemas/ropa.schema';

@Injectable()
export class RopaService {
  constructor(@InjectModel(Ropa.name) private ropaModel: Model<Ropa>) {}


  async create(ropa: any){
    const newRopa = new this.ropaModel(ropa);
    return await newRopa.save();
  }

  async findAll(): Promise<Ropa[]> {
    return this.ropaModel.find().exec();
  }

   // Editar prenda
   async update(id: string, updateRopa: any): Promise<Ropa> {
    return this.ropaModel.findByIdAndUpdate(id, updateRopa, { new: true }).exec();
  }

  // Eliminar prenda
  async delete(id: string): Promise<Ropa> {
    return this.ropaModel.findByIdAndDelete(id).exec();
  }
}
