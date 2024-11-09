import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";

export enum AdminRole{
    ADMIN = 'Admin',
    USER= 'User'
}

@Schema()
export class User{
    @Prop({required:true})
    name: string;

    @Prop({required:true})
    password: string;   

    @Prop({default: AdminRole.USER})
    role: AdminRole;
}

export const UserSchema = SchemaFactory.createForClass(User);