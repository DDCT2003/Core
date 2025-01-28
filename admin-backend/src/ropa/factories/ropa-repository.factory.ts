import { Injectable } from '@nestjs/common';
import { IRopaRepository } from '../Interfaces/ropa-repository.interface';
import { MongoRopaRepository } from '../Repositories/mongo-ropa.repository';



@Injectable()
export class RopaRepositoryFactory {
  constructor(private readonly mongoRepository: MongoRopaRepository) {}

  createRepository(type: string): IRopaRepository {
    if (type === 'mongo') {
      return this.mongoRepository;
    }
    throw new Error('Repository type not supported');
  }
}
