/*

Controllers

    Responsável pelo handle de request e response para o client.

    Para criar um controller usamos classes e decorators.

    Dentro desse controllers podemos ter varias rotas.

    Exemplo de Controller:

        import { Controller, Get } from '@nestjs/common';

        @Controller('cats')
        export class CatsController {
            @Get()
            findAll(): string {
                return 'This action returns all cats';
            }
        }
    
    Primeiro, importamos os decorators Controller e Get do core common, colocamos o decorator Controller com o nome da rota,
    neste caso cats e embaixo criamos a classe CatsController.

    Dentro dessa classe, criamos o metodo que vai ser chamado, neste caso o findAll e decoramos com @Get

    Existem varios tipos de decorators que podemos usar. Verificar lista para o mais apropriado

    Depois do controller criado, temos que adicionar este controller nosso modulo raiz: app.module.ts

    Nosso app.module.ts ficara assim:

        import { Module } from '@nestjs/common';
        import { CatsController } from './cats/cats.controller';

        @Module({
        controllers: [CatsController],
        })
        export class AppModule {}

    Pronto, o controller está definido em nosso app e pode ser usado.
*/
