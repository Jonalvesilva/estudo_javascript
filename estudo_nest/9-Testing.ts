/* 

Testing

Testes automatizados são considerados uma parte essencial no desenvolvimento de software.

Por padrão, o NEst já vem com o Jest instalado.

Os testes são divididos em tres partes: testes unitarios, testes de integração e testes e2e.

    unitario: Focados em testar componentes individuais, como serviços, pipes, ou guards, isolados de outras partes do sistema.
    integração: Focados em testar a interação entre diferentes partes da aplicação, como controladores e serviços, 
                para garantir que eles funcionem bem juntos.
    e2e: Focados em testar o fluxo completo da aplicação, simulando interações reais de um usuário final.

Antes de realizarmos os testes, devemos instalar o testing:

    npm i --save-dev @nestjs/testing

No app, temos os exemplos de cada um dos testes acima:

Podemos rodar os testes da seguinte maneira:

    npm run test //Executa todos os testes da app.
    npm run test:watch //Alem de executar todos, ele reexecuta quando os testes são alterados
    npm run test:cov  //Gera um relatorio de cobertura dos testes;
    npm run test:e2e //Executa o teste fim a fim


Resumindo 

    unitario: partes individuais como service, controllers, guards, pipes, etc.
    integracao: implementacao de uma na outra. por exemplo uma service dentro do controllador.
    e2e: verifica todo o fluxo de req e res

Testes dos modulos

Os testes dos modulos são realizados em qualquer parte dos specs. Geralmente executas antes de todos usando o before.
Integração faz testes do modules, pois eles fazem a integracao de controller com os services e repositories. 
São úteis quando você quer validar o comportamento integrado de vários componentes que estão agrupados em um módulo.

Criacao de mocks, somente quando tenho dependencias. Para isso no test modules dentro do before:

    beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService,
        {
          provide: CatsRepository, // Define o CatsRepository como provider no módulo de teste
          useValue: {
            findAll: jest.fn().mockReturnValue([{ name: 'Tom' }]), // Mock do método findAll
          },
        },
      ],
    }).compile();

    service = module.get<CatsService>(CatsService); // Obtém a instância do CatsService
    catsRepository = module.get<CatsRepository>(CatsRepository); // Obtém a instância do CatsRepository
  });

*/
