//Middlewares são funções para serem executadas na sequencia definida do codigo e  normalmente podem:

//-Rodar um codigo em cada request
//-Manipular ou trocar os objetos da request ou da response
//-Terminar uma response.
//-Chamar uma nova middleware

//No caso anterior, vimos que a expressão express.static('nomeDaUrl') retorna uma função middleware que manipula o processo dos diretorios estáticos

//Essas funções recebem tres argumentos: req, res e next

//Req: objeto de request do Express
//Res: objeto de responsta do Express
//Next: Uma função callback que passa o controle para a proxima função middleware

import express from "express";
const app = express();

//Estrutura de uma função middleware

app.use((req, res, next) => {
  console.log(req);
  next();
});

//Usa-se o app.use sempre que for usar uma middleware no Express

//Middlewares devem sempre chamar next, a menos que completem ou encerrem a solicitação atual

//Geralmente usamos middlewares antes da execução de rotas e de manipulação de arquivos estáticos

//Um exemplo legal é criar uma middleware para verificar se uma pagina ou assets não existe

app.use((req, res, next) => {
  res.status(404).send("Não encontrado");
});

//Esta middleware retorna um status code 404 e envia uma resposta 'Nao encontrado'

//Podemos utilizar as middlewares para as seguintes coisas:

//-Redirecionar para uma outra página
//-Mostrar paginas sugestivas para o usuário
//-Registrar uma bad request para um arquivo para analise mais profunda
