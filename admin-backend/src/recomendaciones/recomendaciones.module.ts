import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecomendacionesService } from './recomendaciones.service';
import { RecomendacionesController } from './recomendaciones.controller';
import{Recomendacion, RecomendacionSchema} from './schemas/recomendaciones.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recomendacion.name, schema: RecomendacionSchema }]),
  ],
  providers: [RecomendacionesService],
  controllers: [RecomendacionesController]
})
export class RecomendacionesModule {}

