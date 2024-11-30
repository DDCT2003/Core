import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Recomendacion {
  @Prop({ required: true })
  prendaId: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  formalidad: string;

  @Prop({ required: true })
  edad: string;

}

export const RecomendacionSchema = SchemaFactory.createForClass(Recomendacion);
