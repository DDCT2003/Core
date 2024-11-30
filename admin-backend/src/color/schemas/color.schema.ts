import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Color {
  @Prop({ required: true })
  color: string;
}

export const ColorSchema = SchemaFactory.createForClass(Color);
