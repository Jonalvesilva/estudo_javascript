/*
Registros

São as rows de cada tabela. Em cada tabela podemos inserir, modificar, visualizar e remover esses registros.


Visualizando Registros

Para visualizar os registros usamos o SELECT.

    SELECT coluna1, coluna2 from table1; //Seleciono apenas as colunas que devem aparecer.
    SELECT * from table1 // * seleciona todas as colunas dessa tabela.


Para inserirmos registros

Para visualizar os registros usamos o INSERT INTO. Deve se definir as colunas e os valores que serão passados:

    INSERT INTO table1 (brand, model, year)
    VALUES
    ('Volvo', 'p1800', 1968),
    ('BMW', 'M1', 1978),
    ('Toyota', 'Celica', 1975);



Para alterar um registro:

Para alterar os registros usamos o UPDATE / SET. No update devemos usar o WHERE para indicar quais registros vamos alterar.
Caso contrário, ele vai alterar todos os registros. Então sempre usar o WHERE.

    UPDATE table1
    SET color = 'red', model='space'
    WHERE brand = 'Volvo';


Para deletar um registro:

Para deletar um registro usamos o DELETE. No update devemos usar o WHERE para indicar quais registros vamos deletar.
Caso contrário, ele vai deletar todos os registros. Então sempre usar o WHERE.

    DELETE FROM table1
    WHERE brand = 'Volvo';

*/
