import { Module } from '@nestjs/common';
import { ModuloModule } from './teste/modulo.module';

@Module({
  imports: [ModuloModule],
})
export class AppModule {}
