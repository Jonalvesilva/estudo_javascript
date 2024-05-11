//Agora vamos criar nosso primeiro servidor com Express

//Antes de começar, devemos importar a dependencia que instalamos anteriormente

import express from "express";

//Agora devemos definir o host e a porta do noss servidor da seguinte maneira:

const host = "0.0.0.0"; //Definimos o endereco 0.0.0.0 para ser nosso host, mas pode ser qualquer outro endereco
const port = 8080; //Definimos nossa porta como 8080 mas poderia ser qualquer outra porta

//Agora devemos inicializar o framework da seguinte forma:

const app = express(); //A const app passa ser o nosso servidor

//Antes de iniciar o servidor, devemos criar uma rota para que seja acessada pelo servidor. Fazemos da seguinte forma:

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Na rota acima, criamos uma rota get para um endereço '/' e ela executa uma função com os parametros req e res

//Req e Res são as requisicoes e respostas que uma rota deve receber e passar. Nesta rota, ela esta respondendo uma string 'hello world'

//Para inicializarmos o servidor devemos fazer da seguinte forma:

app.listen(port, () => {
  console.log(`Servidor rodando no ${host}:${port}`);
});

//Chamamos a função listen, passamos a porta do servidor e a função que retorna uma string dizendo que o servidor esta em execução
