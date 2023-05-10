import { Controller, Get, Param, Query } from '@nestjs/common';
import { SecretService } from './secret.service';

@Controller('secret')
export class SecretController {
  constructor(private readonly secretService: SecretService) {}

  @Get()
  findAll() {
    return this.secretService.findAll();
  }

  @Get('files')
  findByName(@Query('fileName') fileName: string) {
    return this.secretService.findByName(fileName);
  }
}
