/*

Providers

    Providers são classes que podem ser injetadas em outras classes via o sistema de injeção de dependências do NestJS.
    Classes como services, repositories, etc.

    Por exemplo, temos uma class service chamada CatsService, responsável pelo armazenamento e recuperação de dados:
    
        import { Injectable } from '@nestjs/common';
        import { Cat } from './interfaces/cat.interface';

        @Injectable()
        export class CatsService {
        private readonly cats: Cat[] = [];

        create(cat: Cat) {
            this.cats.push(cat);
        }

        findAll(): Cat[] {
            return this.cats;
        }
        }
    
    Para que esta classe service, seja um provider, para que seja utilizado em outras classes, devemos decorar com o @Injectable()
    Isso permite que está classe vire um provider e que possa ser usado pelo controle de dependencias do Nest.

    Agora no CatsController, para injetarmos o service criamos um construtor em controller e injetamos o service desta forma:
        
        constructor(private catsService: CatsService) {}
    
    Assim, temos acesso ao service dentro do controller.

    Depois registramos o provider em nosso modulo:

        import { Module } from '@nestjs/common';
        import { CatsController } from './cats/cats.controller';
        import { CatsService } from './cats/cats.service';

        @Module({
        controllers: [CatsController],
        providers: [CatsService],
        })
        export class AppModule {}

    Neste caso, temos apenas um modulo que é o AppModule. Mas como ficaria se tivessemos mais modulos.
    Veremos no proximo modulo
        
*/
