import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ColorService } from './color.service';
import { ColorController } from './color.controller';
import { Color, ColorSchema } from './schemas/color.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Color.name, schema: ColorSchema }]),
  ],
  providers: [ColorService],
  controllers: [ColorController]
})
export class ColorModule {}


