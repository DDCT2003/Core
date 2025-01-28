import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoRopaRepository {
  private data: any[] = []; // Simula datos si no usas Mongoose

  async create(ropa: any): Promise<any> {
    const newItem = { id: Date.now(), ...ropa };
    this.data.push(newItem);
    return newItem;
  }

  async findAll(): Promise<any[]> {
    return this.data;
  }

  async findOneById(id: string): Promise<any> {
    return this.data.find((item) => item.id === id);
  }

  async update(id: string, updateRopa: any): Promise<any> {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('Item not found');
    this.data[index] = { ...this.data[index], ...updateRopa };
    return this.data[index];
  }

  async delete(id: string): Promise<any> {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) throw new Error('Item not found');
    return this.data.splice(index, 1)[0];
  }
}
