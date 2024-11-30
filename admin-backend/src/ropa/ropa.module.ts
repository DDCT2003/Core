import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RopaService } from './ropa.service';
import { RopaController } from './ropa.controller';
import { Ropa, RopaSchema } from './schemas/ropa.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ropa.name, schema: RopaSchema }]),
  ],
  providers: [RopaService],
  controllers: [RopaController],
})
export class RopaModule {}
