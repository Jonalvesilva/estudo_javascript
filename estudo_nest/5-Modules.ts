/* 

Modules

    São metadata que organizam a estrutura da aplicação. São decorados por @Module()

    As aplicações Nest deve ter no mínimo um modulo root. Este modulo deve ser declarado no create do NestFactory, no inicio do bootstrap.

    Podemos ter vários modulos, mas apenas um modulo root que vai chamar todos os outros.

    Estrutura de um modulo:

        controllers: Aqui onde vamos colocar os controllers daquele modulo
        providers: Aqui onde vamos colocar os providers (service, repositories, etc)
        imports: Aqui que vamos importar outros modulos. Geralmente usado apenas no root Modulo.
        exports: Serve para exportar controllers e providers de um modulo, ou ate mesmo o modulo inteiro, 
                 para ser usado em outros modulos. Ainda deve colocar importar e injetar a dependencia,
                 mas não precisa registrar provider no outro modulo pois ele esta pegando do modulo exportador

    Exemplo modulo:

        import { Module } from '@nestjs/common';
        import { CatsController } from './cats.controller';
        import { CatsService } from './cats.service';

        @Module({
        imports:[],
        controllers: [CatsController],
        providers: [CatsService],
        exports:[CatsService]  (Lembrando que podemos exportar controllers e até modulos)
        })
        export class CatsModule {}
        
    Neste exemplos temos CatsModule, onde não importamos outros modulos, definimos os controllers e os providers, e estamos
    exportando o CatsService, para que quando este modulo for importado por outro, aquele modulo pode ter acesso ao provider
    exportado. Lembrando que o provider ainda deve ser injetado onde for usado, porém sem ser registrado no modulo que está
    usando.

    Modulos Globais

    No NestJS, módulos globais são uma forma de tornar um módulo e seus providers disponíveis em toda a aplicação 
    sem a necessidade de importá-los explicitamente em cada módulo individual. Isso é útil para configurações e serviços que são 
    usados em várias partes da aplicação.

    Definimos um modulo global usando o Module @Global()

    Exemplo Modulo Global:

        import { Module, Global } from '@nestjs/common';
        import { LoggingService } from './logging.service';

        @Global()
        @Module({
        providers: [LoggingService],
        exports: [LoggingService],
        })
        export class LoggingModule {}
    
    Agora pode usar os exports desse modulo de qualquer lugar sem a necessidade de importar o modulo 
    Evitar seu uso para possiveis complicações no codigo.
*/
