/*
Config

Usamos o config para implementarmos arquivos env e outras info para ser usados em nossos modulos.

Primeiro temos de instalar o config. Por padrão ele já tem o dotenv integrado.

    npm i --save @nestjs/config

Em nosso modulo, devemos importar o ConfigModule. Tipicamente é usado dentro do modulo raiz (AppModule) no imports.

ConfigModule tem um metodo chamado forRoot({}). Dentro desse objeto, passamos as info.

Exemplo:

    import { Module } from '@nestjs/common';
    import { ConfigModule } from '@nestjs/config';

    @Module({
    imports: [ConfigModule.forRoot({
        envFilePath: ['.env.development.local', '.env.development'],
        ...
    });],
    })
    export class AppModule {}


Custom configuration

Podemos criar arquivos separados de configuração e importa-los no nosso modulo. Usamos o load dentro do forRoot

    configuration.ts

        export default () => ({
            port: parseInt(process.env.PORT, 10) || 3000,
            database: {
                host: process.env.DATABASE_HOST,
                port: parseInt(process.env.DATABASE_PORT, 10) || 5432
            }
        });

    app.module.ts

        import configuration from './config/configuration';

        @Module({
        imports: [
            ConfigModule.forRoot({
            load: [configuration],
            }),
        ],
        })
        export class AppModule {}


São utilizadas  para gerenciar e acessar as variáveis de ambiente em sua aplicação.
*/
