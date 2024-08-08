/*

Middlewares -Funções que são chamadas durante o handler das rotas.

Elas tem acesso aos objetos Request e Response da rota.

Para ser um middleware tem que se usar ser metodo: next();

Mesmo uso no Express:

    Podem executar qualquer codigo;
    Fazer alterações nos objetos Req e Res;
    Terminar um cicle de Req e Res;
    Chamar proxima middleware na pilha;
    Se o middleware não terminar o ciclo (req e res), deve chamar o next() para passar o controle para o proximo middleware

Os middlewares tem uma abstração mais baixa em relação aos controllers e services. 

Por isso não devemos usar decorators de Req e Res nos middlewares.

Usamos os objetos diretamente do Express ou Fastify. Usaremos do Express.

*Exemplo de Criação de Middleware*

    import { Injectable, NestMiddleware } from '@nestjs/common';
    import { Request, Response, NextFunction } from 'express';

    @Injectable()
    export class LoggerMiddleware implements NestMiddleware {
        use(req: Request, res: Response, next: NextFunction) {
            console.log('Request...');
            next();
        }
    }

Primeiro importamos o Injectable e o NestMiddleware da core common. Em seguida os objetos Req,Res e Next do Express.

Depois criamos a classe middleware que implementa a interface NestMiddleware. Decoramos esta classe com @Injectable.

Depois usamos criamos a função use(). Ela é equivalente ao app.use() do Express.

Para use(), passamos os parametros do Req,Res e Next. Depois só criar os codigos.


*Aplicando Middleware*

São adicionados nos modulos.

Exemplo de Aplicação de Middleware:

    import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
    import { LoggerMiddleware } from './common/middleware/logger.middleware';
    import { CatsModule } from './cats/cats.module';

    @Module({
    imports: [CatsModule],
    })
    export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(LoggerMiddleware)
        .forRoutes('cats');
    }
    }

Nos módulos, não há lugar para os middlewares. Devemos setá-los usando o metodo configure() do module.

Este metodo configure() só esta disponivel quando implementamos a interface NestModule.

Como parametro do configure() devemos criar um consumer do tipo MiddlewareConsumer.

Dentro do configure invocamos o consumer.

Esse consumer dever chamar duas funções respectivamente: apply e forRoutes;

    apply: Onde aplica o middleware escolhido. Aqui podem ser colocados n middlewares.
    forRoutes: As rotas que vão ser aplicadas esse middleware.

No forRoutes, podemos passar as rotas da seguinte forma:

    direta -> Exemplo: 'cats' (Será aplicado em todos os HTTP da rota)
    path/method -> Exemplo: {path:'cats', method:RequestMethod.GET} (Será aplicado em todos os GET da rota)
    controller -> Exemplo: CatsController


*/
