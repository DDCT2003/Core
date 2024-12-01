import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recomendacion } from './schemas/recomendaciones.schema';

@Injectable()
export class RecomendacionesService {
    constructor(@InjectModel(Recomendacion.name) private recomendacionModel: Model<Recomendacion>) {}


    async guardarVarias(recomendaciones: any[], username: any): Promise<any> {
        const documentos = recomendaciones.map((recomendacion) => ({
          prendaId: recomendacion._id,
          nombre: recomendacion.nombre,
          formalidad: recomendacion.formalidad,
          edad: recomendacion.edad,
          userid: username,
        }));
      
        // Inserta todas las recomendaciones de una vez
        return await this.recomendacionModel.insertMany(documentos);
      }

      async getByUsuario(username: string): Promise<Recomendacion[]> {
        const recomendaciones = await this.recomendacionModel.find({ username }).exec();
    
        // Filtrar duplicados basado en `prendaId`
        const uniqueRecomendaciones = Array.from(
          new Map(recomendaciones.map((item) => [item.prendaId, item])).values()
        );
    
        return uniqueRecomendaciones;
      }
      
}
