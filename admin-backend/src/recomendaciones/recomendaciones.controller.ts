import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { RecomendacionesService } from './recomendaciones.service';

@Controller('recomendaciones')
export class RecomendacionesController {
    constructor(private recomendacionService: RecomendacionesService) {}


    @Post('guardar-recomendaciones')
    async guardarRecomendaciones(@Body() data: { recomendaciones: any[], username: any }) {
      return this.recomendacionService.guardarVarias(data.recomendaciones, data.username);
    }
    
   
  @Get('usuario')
  async getRecomendacionesByUsuario(@Param('username') username: string) {
    return this.recomendacionService.getByUsuario(username);
  }



}
