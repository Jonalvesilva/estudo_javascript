//Tipos de dados

//Tipo primitivo - Dado que não é representado através de objeto

let numero = 42; // Number: Números inteiros ou de ponto flutuante.
let texto = "Olá, mundo!"; // String: Sequência de caracteres.
let verdadeiroOuFalso = true; // Boolean: Valor verdadeiro ou falso.
let ausenciaDeValor = null; // Null: Representa a ausência intencional de valor.
let naoInicializado; // Undefined: Valor atribuído automaticamente a variáveis não inicializadas.
let simbolo = Symbol("descricao"); // Symbol: Valor único usado como chave de propriedade de objeto.

//Tipo não primitivo - Dado que é representado através de objeto e funções

let objeto = { chave: "valor" }; // Object: Estrutura de dados que pode conter múltiplos valores (chave:valor).
let lista = [1, 2, 3]; // Array: Objeto especial que armazena uma coleção ordenada de valores.
let funcao = function () {
  console.log("Olá!");
}; // Function: Objetos que podem ser invocados.
let numeroGrande = 1234567890123456789012345678901234567890n; // BigInt: Números inteiros arbitrariamente grandes.

// Wrappers - Tenta converter para os tipos escolhidos - null e undefined não tem

String(52); //Tenta transformar o number em string
Number("52"); //Tenta transformar o string em number
Boolean("true"); //Tenta transformar string em boolean
Symbol("teste"); //Tenta transformar string em boolean

//Uso do + para transformar em Number

let a = +numero; //O + na frente da variavel tenta converter para number;
