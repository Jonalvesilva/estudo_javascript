/*

Após a instalação será criada uma pasta src, com alguns arquivos nucleos importantes:

    app.controller.ts: Um controller básico com uma rota simples.
    app.controller.spec.ts: Uma unidade de teste para esse controller.
    app.module.ts: Modulo raiz da app.
    app.service.ts: Um service basico com um simples metodo.
    main.ts: O arquivo de entrada do aplicativo que usa a função principal NestFactory para criar uma instância do aplicativo Nest.


Main.ts

    Inclui uma função async que iniciará nossa app. Nesta função (bootstrap) usamos a core NestFactory para instanciar uma app Nest,
    e usamos o metodo create para passar o modulo raiz da nossa aplicação. Com a app atribuida, apenas escutamos na porta desejada.
    
    import { NestFactory } from '@nestjs/core';
    import { AppModule } from './app.module';

    async function bootstrap() {
        app = await NestFactory.create(AppModule);
        await app.listen(3000);
    }
    bootstrap();

*/
