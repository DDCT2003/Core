import { Document } from 'mongoose';
export declare class Ropa extends Document {
    nombre: string;
    talla: string;
    precio: string;
    formalidad: string;
    edad: string;
    color: string;
    tipo: string;
    clima: string;
    stock: string;
}
export declare const RopaSchema: import("mongoose").Schema<Ropa, import("mongoose").Model<Ropa, any, any, any, Document<unknown, any, Ropa> & Ropa & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Ropa, Document<unknown, {}, import("mongoose").FlatRecord<Ropa>> & import("mongoose").FlatRecord<Ropa> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
