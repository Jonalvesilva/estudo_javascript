/*
Guards

Um pipe é uma classe que usa o decorator Injectable() que implementa a interface CanActivate

Guards no NestJS são um recurso que permite interceptar as requisições antes que elas cheguem ao manipulador de rotas (handlers) 
e realizar verificações ou lógica personalizada, como autenticação e autorização. Eles são semelhantes a middlewares, 
mas oferecem mais controle sobre o fluxo da aplicação. 

Geralmente chamamos de Autorização.

Como funcionam

Eles são chamados antes que o manipulador de rotas seja chamado. Depois eles podem permitir ou negar a execução
do manipulador (true ou false). Caso false, não prossegue e retorna erro 403.

Exemplo Guard

    import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
    import { Observable } from 'rxjs';

    @Injectable()
    export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
       return true;
    }
    }

1 - Importamos o Injectable, CanActivate e ExecutionContext da common. Depois o Observable da rxjs.
2 - Criamos a class guard que implementa a interface CanActivate e a decoramos com @Injectable.
3 - Dentro da classe temos  metodo canActivate(). Declaramos o parametro context com o tipo ExecutionContext.
4 - Esse metodo deve ser do tipo: boolean | Promise<boolean> | Observable<boolean>;
5 - Dentro deste metodo devemos criar nossas logicas referente a guard criada e retornar true ou false.
    Por exemplo, uma AuthGuard, devemos criar uma logica que verifica se o user tem autorização para acessar uma handler.
    Se está retorna true, senão false.


Aplicando uma Guard

Podemos aplicar de 2 formas: Individual e Global

Individual

No Individual podemos colocar no nivel tanto de rota quanto de controlador. Usamos o decorator useGuards(guard).

    import { Controller, Get, UseGuards } from '@nestjs/common';

    @Controller('cats')
    @UseGuards(AuthGuard) //nivel controlador
    export class CatsController {
    @Get()
    @UseGuards(AuthGuard) //nivel rota
    findAll() {
        return [];
    }
    }

Global

Deve ser aplicado dentro da Module Raiz. Você pode aplicar um Guard globalmente em toda a aplicação usando o provedor global:

    import { Module } from '@nestjs/common';
    import { APP_GUARD } from '@nestjs/core';

    @Module({
    providers: [
        {
        provide: APP_GUARD,
        useClass: AuthGuard,
        },
    ],
    })
    export class AppModule {}

1 - Importamos o provedor APP_GUARD do core.
2 - Dentro de providers, criamos um objeto com duas keys: provide e useClass.
3 - Em provide, passamos o valor do provedor e em useClass o valor da guard criada.

*/
