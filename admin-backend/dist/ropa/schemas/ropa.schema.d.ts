export declare enum Formalidad {
    Formal = "Formal",
    Semiformal = "Semiformal",
    Casual = "Casual"
}
export declare class Ropa {
    nombre: string;
    talla: string;
    precio: string;
    color: string;
    tipo: string;
    edad: string;
    formalidad: Formalidad;
    clima: string;
    stock: string;
}
export declare const RopaSchema: import("mongoose").Schema<Ropa, import("mongoose").Model<Ropa, any, any, any, import("mongoose").Document<unknown, any, Ropa> & Ropa & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Ropa, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Ropa>> & import("mongoose").FlatRecord<Ropa> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
