//O roteamento de URL é o coração do processamento Express

//Fizemos apenas algumas rotas simples com get, mas tem mais opções que podemos fazer com elas:

//-Manusear diferentes rotas em uma unica função
//-Usar rotas para extrair valores atraves de seus parametros
//-Usar outros metodos HTTP: get, post, delete e put
//-Agrupar um determinado manuseador de rotas em apenas um arquivo

//Vamos começar falando dos parametros de rotas

import express from "express";
const app = express();

//Podemos pegar os valores que forem passados na url das rotas atraves do (:). Veja no exemplo

app.get("/author/:name/book/:bookName", (req, res, next) => {
  console.log(`author: ${req.params.name}`);
  console.log(`  book: ${req.params.bookName}`);
});

//Aqui temos uma rota onde temos parametros dinamicos name e bookName.
//Parametros dinamicos são parametros que podem ser substituido por outro valor
//Por exemplo, quando acessamos a rota, apenas substituimos os parametros com (:) por valores que determinados
//Um exemplo da rota acima: /author/jonathan/book/jaspion

//Para conseguirmos pegar seus valores, devemos utilizar o req.params e depois o parametro escolhido.
//No exemplo, pegamos os valores passados atraves do req.params para mostrar um console.log

//Agora vamos falar sobre os outros métodos de rota. O Express suporta todos os outros metodos HTTP. Aqui alguns deles:

app.get(); //Usado para retornar uma requisicao
app.post(); //Usado para enviar uma requisição
app.put(); //Usado para enviar uma requisicao de atualização total
app.delete(); //Usado para enviar uma requisicao de deletar
app.patch(); //Usado para enviar uma requisicao de atualização parcial

//No proximo modulo veremos mais sobre Route handler
