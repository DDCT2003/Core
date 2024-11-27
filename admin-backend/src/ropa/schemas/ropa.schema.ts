import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";

export enum Formalidad{
    Formal = 'Formal',
    Semiformal= 'Semiformal',
    Casual='Casual'
}

@Schema()
export class Ropa{
    @Prop({required:true})
    nombre: string;

    @Prop({required:true})
    talla: string; 

    @Prop({required:true})
    precio: string;
    
    @Prop({required:true})
    color: string;   

    @Prop({required:true})
    tipo: string;   

    @Prop({ required: true })
    edad: string;
  
    @Prop({ required: true })
    formalidad: Formalidad;
        
    @Prop({required:true})
    clima: string;   
    
    @Prop({required:true})
    stock: string;   

}

export const RopaSchema = SchemaFactory.createForClass(Ropa);