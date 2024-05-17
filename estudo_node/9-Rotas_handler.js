//Criar varias rotas dentro do seu arquivo index é inviavel a medida que o projeto aumenta

//Uma opção de melhorar é a criação de rotas handlers

//Rotas handlers são middlewares de manipulação de rotas em arquivos separados com funcionalidades relacionadas

//Geralmente rotas ficam em um diretorio chamado routes e ficam em arquivos diferentes

//Estrutura de uma Router Handler para hello.js

import { Router } from "express";

export const helloRouter = Router();

helloRouter.get("/", (req, res, next) => {});

//Agora no arquivo index chamamos apenas seu manipulador desta forma:

app.use("/hello", helloRouter);

//Assim qualquer metodo no helloRouter usará a rota /hello como a rota raiz.

//Tambem podemos usar esta estrutura para a criação de controllers da MVC
