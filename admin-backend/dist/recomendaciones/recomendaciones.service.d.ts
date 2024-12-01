import { Model } from 'mongoose';
import { Recomendacion } from './schemas/recomendaciones.schema';
export declare class RecomendacionesService {
    private recomendacionModel;
    constructor(recomendacionModel: Model<Recomendacion>);
    guardarVarias(recomendaciones: any[], username: any): Promise<any>;
    getByUsuario(username: string, fechaInicio?: string, fechaFin?: string): Promise<Recomendacion[]>;
}
