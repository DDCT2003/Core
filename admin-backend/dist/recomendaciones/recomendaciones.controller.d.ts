import { RecomendacionesService } from './recomendaciones.service';
export declare class RecomendacionesController {
    private recomendacionService;
    constructor(recomendacionService: RecomendacionesService);
    guardarRecomendaciones(data: {
        recomendaciones: any[];
        username: any;
    }): Promise<any>;
    getRecomendacionesByUsuario(username: string, fechaInicio?: string, fechaFin?: string): Promise<import("./schemas/recomendaciones.schema").Recomendacion[]>;
}
