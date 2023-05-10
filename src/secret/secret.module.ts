import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SecretService } from './secret.service';
import { SecretController } from './secret.controller';

@Module({
  imports: [HttpModule],
  controllers: [SecretController],
  providers: [SecretService],
})
export class SecretModule {}
