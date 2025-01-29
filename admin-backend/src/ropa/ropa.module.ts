import { Module } from '@nestjs/common';
import { RopaController } from './ropa.controller';
import { ClothesService } from './ClothesService';
import { RopaService } from './ropa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ropa, RopaSchema } from './ropa.model';
import { HttpModule } from '@nestjs/axios';
import { MongoRopaRepository } from './Repositories/mongo-ropa.repository';


@Module({
  imports: [HttpModule,MongooseModule.forFeature([{ name: Ropa.name, schema: RopaSchema }])],
  controllers: [RopaController], 
  providers: [ClothesService,RopaService,MongoRopaRepository], 
  exports: [ClothesService,RopaService,MongoRopaRepository], 
})
export class RopaModule {}
