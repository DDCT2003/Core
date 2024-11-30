import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ropa extends Document {
  @Prop({ required: true, unique: true })
  nombre: string;

  @Prop({ required: true })
  talla: string;

  @Prop({ required: true })
  precio: string;

  @Prop({ required: true })
  formalidad: string;

  @Prop({ required: true })
  edad: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  tipo: string;

  @Prop({ required: true })
  clima: string;

  @Prop({ required: true })
  stock: string;
}

export const RopaSchema = SchemaFactory.createForClass(Ropa);
