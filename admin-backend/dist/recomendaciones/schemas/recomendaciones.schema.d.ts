export declare class Recomendacion {
    prendaId: string;
    userid: string;
    nombre: string;
    formalidad: string;
    edad: string;
    fecha: Date;
}
export declare const RecomendacionSchema: import("mongoose").Schema<Recomendacion, import("mongoose").Model<Recomendacion, any, any, any, import("mongoose").Document<unknown, any, Recomendacion> & Recomendacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Recomendacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Recomendacion>> & import("mongoose").FlatRecord<Recomendacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
