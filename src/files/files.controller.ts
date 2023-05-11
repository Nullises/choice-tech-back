import { Controller, Get, Query } from '@nestjs/common';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get('list')
  findAll() {
    return this.filesService.findAll();
  }

  @Get('data')
  findByName(@Query('fileName') fileName: string) {
    return this.filesService.findByName(fileName);
  }
}
