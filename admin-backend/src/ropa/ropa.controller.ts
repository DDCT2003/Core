import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RopaService } from './ropa.service';
import { Ropa } from './schemas/ropa.schema';

@Controller('ropa')
export class RopaController {
  constructor(private ropaService: RopaService) {}

  @Post()
  async create(@Body() createRopa: any) {
    return await this.ropaService.create(createRopa);
  }

  @Get('get')
  async findAll(): Promise<Ropa[]> {
    return this.ropaService.findAll();
  }

  // Endpoint para editar prenda
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRopa: any) {
    return this.ropaService.update(id, updateRopa);
  }

  @Put('getOne/:id')
  async searchOne(@Param('id') id: string) {
    return this.ropaService.searchOne(id);
  }

  // Endpoint para eliminar prenda
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.ropaService.delete(id);
  }
}
