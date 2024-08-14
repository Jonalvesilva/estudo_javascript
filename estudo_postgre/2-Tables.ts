/*
Após criarmos nossa database, devemos trabalharm com as tables:

Para isso, temos certo comandos que podemos usar. Tambem podemos realizar de forma simples pelo pgAdmin.

CREATE TABLE - Cria tabelas em nossa database

    CREATE TABLE cars (
        brand VARCHAR(255), //Aqui definimos os nomes das colunas bem como seus tipos. Pode ter (primary key, unique,etc)
        model VARCHAR(255), //Aqui definimos os nomes das colunas bem como seus tipos. Pode ter (primary key, unique,etc)
        year INT
    );

ALTER TABLE - Usado para add, delete ou update de colunas de uma table existente. Deve sempre iniciar com ALTER TABLE e sua table.

    ADD COLUMN - Adicionar coluna

        ALTER TABLE cars
        ADD COLUMN color VARCHAR(255) (primary key, unique,etc);
    
    DROP COLUMN - Remove coluna

        ALTER TABLE cars
        DROP COLUMN color;

    ALTER COLUMN - Altera coluna. Deve se usar o TYPE para indicar o novo tipo da coluna.

        ALTER TABLE cars
        ALTER COLUMN year TYPE VARCHAR(4) (primary key, unique,etc);

    RENAME COLUMN - Renomeia coluna.

        ALTER TABLE employees
        RENAME COLUMN name TO full_name;

    RENAME - Renomeia tabela.

         ALTER TABLE employees
         RENAME TO full_name;

DROP TABLE - Apaga sua table (coluna e registros). Ela não existirá mais. Use com sabedoria.

    DROP TABLE cars;

TRUNCATE TABLE - Ela limpa apenas os registros de uma tabela. Ela deixa a estrutura. Diferente do DROP que apaga tudo.

    TRUNCATE TABLE cars;

CREATE TABLE AS - Usado para clonar estrutura e/ou dados de uam tabela existente.

    CREATE TABLE employees_copy AS TABLE employees WITH NO DATA; //Apenas a estrutura.
    CREATE TABLE employees_copy AS TABLE employees // Estrutura e registros.


Esses são alguns comandos mais utilizados. Existem outros.


*/
