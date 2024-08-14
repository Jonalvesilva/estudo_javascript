import { Module } from '@nestjs/common';
import { ModuloModule } from './app/modulo.module';

@Module({
  imports: [ModuloModule],
})
export class AppModule {}
