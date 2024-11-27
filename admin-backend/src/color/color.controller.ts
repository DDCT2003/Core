import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ColorService } from './color.service';
import{ Color } from './schemas/color.schema'

@Controller('color')
export class ColorController {
    constructor(private colorService: ColorService) {}

    @Post()
    async create(@Body() createColor: any) {
        return await this.colorService.create(createColor);
      }

    @Get('get')
    async findAll(): Promise<Color[]> {
        return this.colorService.findAll();
      }

        // Endpoint para editar prenda
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateColor: any) {
    return this.colorService.update(id, updateColor);
  }

  // Endpoint para eliminar prenda
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.colorService.delete(id);
  }
}
