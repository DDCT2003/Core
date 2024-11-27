import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";

export enum AdminRole{
    ADMIN = 'Admin',
    USER= 'User'
}

export enum Formalidad{
    Formal = 'Formal',
    Semiformal= 'Semiformal',
    Casual='Casual'
}

@Schema()
export class User{
    @Prop({required:true})
    name: string;

    @Prop({required:true})
    password: string;   

    @Prop({default: AdminRole.USER})
    role: AdminRole;

    @Prop({ required: true })
    formalidad: Formalidad;

    @Prop({ required: true })
    edad: string;
}

export const UserSchema = SchemaFactory.createForClass(User);