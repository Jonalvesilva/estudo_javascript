import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  //Sempre iniciar criando o teste de modulo
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService], //Usar os [provide] quando houver dependencia. Como não tem, foi a classe
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should return "Hello World"', () => {
    expect(appService.getHello()).toBe('Hello World!');
  });
});
