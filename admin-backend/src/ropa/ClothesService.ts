import { Injectable } from '@nestjs/common';

@Injectable()
export class ClothesService {
  private data: any[] = []; // Simula la base de datos

  async getClothesByCriteria(clima: string, formalidad?: string, edad?: string) {
    const query: any = { clima };
    if (formalidad) query.formalidad = formalidad;
    if (edad) query.edad = edad;

    // Simula una búsqueda en la base de datos
    return this.data.filter((item) =>
      Object.keys(query).every((key) => item[key] === query[key]),
    );
  }
}
