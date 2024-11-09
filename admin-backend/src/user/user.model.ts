import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  nombre: string;

  @Prop({ required: true })
  contraseña: string;

  @Prop({ default: 'user' })
  tipo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
