import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ropa } from './ropa.model';
import { Model } from 'mongoose';

@Injectable()
export class ClothesService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Ropa.name) private clothesModel: Model<Ropa>,
  ) {}
  async getClothesByCriteria(clima: string, formalidad?: string, edad?: string) {
    const query: any = { clima };
    if (formalidad) query.formalidad = formalidad;
    if (edad) query.edad = edad;
    console.log(await this.clothesModel.find({ clima: clima }).exec())

    // Simula una búsqueda en la base de datos
    return this.clothesModel.find({ clima: clima, formalidad:formalidad, edad:edad }).exec()
  }
}
