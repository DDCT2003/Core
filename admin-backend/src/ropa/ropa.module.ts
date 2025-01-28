import { Module } from '@nestjs/common';
import { RopaController } from './ropa.controller';
import { ClothesService } from './ClothesService';
import { RopaService } from './ropa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ropa, RopaSchema } from './ropa.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ropa.name, schema: RopaSchema }])],
  controllers: [RopaController], 
  providers: [ClothesService,RopaService], // Agrega ClothesService aquí
  exports: [ClothesService,RopaService], // Expórtalo para otros módulos
})
export class RopaModule {}
