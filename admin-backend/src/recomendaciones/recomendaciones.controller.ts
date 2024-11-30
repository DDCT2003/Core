import { Body, Controller, Post } from '@nestjs/common';
import { RecomendacionesService } from './recomendaciones.service';

@Controller('recomendaciones')
export class RecomendacionesController {
    constructor(private recomendacionService: RecomendacionesService) {}


    @Post('guardar-recomendaciones')
    async guardarRecomendaciones(@Body() data: { recomendaciones: any[] }) {
      return this.recomendacionService.guardarVarias(data.recomendaciones);
    }
    



}
