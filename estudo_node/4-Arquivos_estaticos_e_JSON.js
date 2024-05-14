//Express permite definir um unico diretorio que contenha arquivos estaticos e retorna qualquer arquivo que corresponda a url chamada

//Isso inclui arquivos HTML, Javascript, entre outros

//Para definir a pasta devemos usar um middleware do Express chamado express.static('urlDaPasta')

//Veremos mais a frente o que são middlewares

//Para que o Express possa usar as middlewares devemos usar a função use do framework

import express from "express";

const app = express();

app.use(express.static("/")); //Aqui estamos dizendo para que o express use a middleware express.static('/')

//Usa-se sempre o app.use sempre que for usar uma função middleware no Express

//Para que possamos usar JSON no express, devemos fazer da seguinte forma:

app.use(express.json());

//Isso permite que o Express seja capaz de trabalhar com arquivos JSON.

//Existem outros middlewares que podemos usar. Esses são alguns deles
