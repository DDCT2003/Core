import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private usuarioModel: Model<User>) {}


  async create(user: any){
    const newUsuario = new this.usuarioModel(user);
    return await newUsuario.save();
  }

  async login(name: string, password: string) {
    const user = await this.usuarioModel.findOne({ name, password });
    if (user) {
      return {
        name: user.name,
        role: user.role,
        edad: user.edad,
        formalidad: user.formalidad
      };
    }
    return null;
  }

}
