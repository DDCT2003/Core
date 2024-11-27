import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color } from './schemas/color.schema';

@Injectable()
export class ColorService {
  constructor(@InjectModel(Color.name) private colorModel: Model<Color>) {}


  async create(color: any){
    const newColor = new this.colorModel(color);
    return await newColor.save();
  }

  async findAll(): Promise<Color[]> {
    return this.colorModel.find().exec();
  }

   // Editar prenda
   async update(id: string, updateColor: any): Promise<Color> {
    return this.colorModel.findByIdAndUpdate(id, updateColor, { new: true }).exec();
  }

  // Eliminar prenda
  async delete(id: string): Promise<Color> {
    return this.colorModel.findByIdAndDelete(id).exec();
  }
}
