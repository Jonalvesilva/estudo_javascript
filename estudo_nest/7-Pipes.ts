/* 

Pipes

Um pipe é uma classe que usa o decorator Injectable() que implementa a interface PipeTransform

Um pipe tem dois casos de uso:

    Validação: Pipes são principalmente usados para validar e transformar os dados de entrada antes que 
    eles sejam manipulados pelo controlador.
    
    Transformação: Pipes transformam os dados, como converter uma string em um número, ou sanitizar valores.

Embora o pipes e o middlewares realizem algumas das mesmas funções como validação e transformação de dados,
eles servem a propositos diferentes:

    Middleware: Processa req e res em um nivel mais geral, como logging, autenticação, autorização, 
    manipulação de cabeçalhos, e outras tarefas semelhantes. Opera antes do Pipe.

    Pipes: São usados especificamente para transformação e validação de dados de entrada.Operam em um nível 
    mais granular, diretamente nos parâmetros do método do controlador ou em DTOs.

Fluxo de requisição do Nest

    Middleware-> Guards-> Pipes-> Interceptors-> Controllers

Em resumo, um pipe é uma funçõa ou classe que é executada para validar ou transformar dados antes
que sejam utilizados pelo metodo do controlador. Usados nos @Param, @Body e @Query.

Por padrão, o Nest já tem algumas Pipes em sua biblioteca, como ParseIntPipe, que tenta converter string para inteiro.

Mas vamos supor que você queira criar uma pipe para uma determinada validacao ou transformação?


*Criação de uma Pipe*

    import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

    @Injectable()
    export class ParseIntPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {
        const intValue = parseInt(value, 10);
        if (isNaN(intValue)) {
        throw new BadRequestException('Validation failed');
        }
        return intValue;
    }
    }

Neste exemplo, vamos criar a ParseIntPipe novamente.

Primeiro, importamos o PipeTransform, Injectable, ArgumentMetadata, Metadata e BadRequestException

Criamos a classe ParseIntPipe e implementamos a interface PipeTransform

Dentro da classe, chamamos metodo transform() com parametros value e metadata.

Metadata não foi utilizado, mas ele retorna informações como param, body, query.

Dentro do transform(), criamos as logicas de validação e transformação de dados.


*Aplicação de uma Pipe*

    import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

    @Controller('items')
    export class ItemsController {
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return `Item #${id}`;
    }
    }

Apenas importamos o Pipe criado e dentro do decorator @Param(), @Body() e @Body(), adicionar o pipe após o valor.

Neste caso, foi usado o @param e depois do valor 'id' foi usado o pipe.

Podemos usar DTOs no lugar das pipes para garantir o valor. Geralmente usamos o Zod para criar os schemas.

Podemos ter varios pipes em um mesmo decorator.

*/
