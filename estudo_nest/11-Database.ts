/*
Integração Database

Para integração SQL e NoSQL, o Nest possui o pacote para TypeORM. Por padrão usamos esse, mas pode ser usado outros ORM.

Para instalar o TypeORM

    npm install --save @nestjs/typeorm typeorm **
    ** -> Instalar banco caso o mesmo for local. Substituir pelo nome do banco.


Dentro do modulo raiz (AppModule), devemos importar o TypeOrmModule e colocar dentro de imports.

TypeOrmModule também tem um metodo chamado forRoot({}). NEste objeto colocamos as info do banco a qual vamos conectar.
Aqui passamos as chave valor das env para maior seguranca da app.

    import { Module } from '@nestjs/common';
    import { ConfigModule, ConfigService } from '@nestjs/config';
    import { TypeOrmModule } from '@nestjs/typeorm';

    @Module({
    imports: [
        ConfigModule.forRoot(), // Carrega as variáveis de ambiente do .env
        TypeOrmModule.forRootAsync({
        imports: [ConfigModule], //Importamos o config module para ser usado dentro do typeorm
        inject: [ConfigService], //Usamos o configService para acessar as chave valor da env.
        useFactory: async (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            username: configService.get<string>('DB_USERNAME'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_DATABASE'),
            entities: [User],
            synchronize: true,
        }),
        }),
    ],
    controllers: [UserController],
    providers: [UserService],
    })

    export class AppModule {}

Para outros modulos que não seja o modulo principal, passar as entidades desse jeito no imports: TypeOrmModule.forFeature([...],[...],...),

Entidades

Entidades são a representação das nossas tabelas em forma de classe

Por exemplo: Representação da tabela User

    import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

    @Entity()
    export class User {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        name: string;

        @Column()
        email: string;

        @Column()
        password: string;
    }

Aqui importamos os decorators Entity, Column, PrimaryGeneratedColumn.

Criamos a class User e decoramos com @Entity()

Dentro delas criamos as colunas com seus tipos e depois decoramos com Column(). Id recebe o decorator @PrimaryGeneratedColumn().
Ele marca esta coluna como chave primaria gerada automaticamente.

Existem outros decorator que podemos usar.

Services e Repositories

Para que possa criar um service e repository usando o TypeOrm podemos fazer da seguinte maneira:

    import { Injectable } from '@nestjs/common';
    import { InjectRepository } from '@nestjs/typeorm';
    import { Repository } from 'typeorm';
    import { User } from './user.entity';

    @Injectable()
    export class UserService {
        constructor(
            @InjectRepository(User)
            private userRepository: Repository<User>,
        ) {}

        async findAll(): Promise<User[]> {
            return this.userRepository.find();
        }
    }

Neste exemplo criamos a classe UserService. Ja como ela vai sder injetada no controlador, decoramos com @Injectable().

Dentro do construtor da UserService, criamos o repository userRepository. Ele deve ser decorado com @InjectRepository(User)
para que possa injetar User como repositorio.

userRepository deve ser do tipo Repository<User>


Migrations

Para gerenciar mudanças no esquema do banco de dados, você pode usar migrações do TypeORM.

Gerar migrations:

    npx typeorm migration:generate -n MigrationName

Executar migration

    npx typeorm migration:run

Reverter migration

    npx typeorm migration:revert


*/
