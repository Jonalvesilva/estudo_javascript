//Funções - Bloco de codigo para realizar uma tarefa particular. É executada quando alguem a invoca

//Exemplo função

function myFunction(p1, p2) {
  return p1 * p2; //Codigo a ser executado
}

//Uma função é definida através da palavra function, seguida do nome da função e seguida por () e {}.
//Dentro dos () podemos passar parametros. Esses parametros são declarados para que possam ser passados quando é invocada.
//Dentro da função, os parametros são tratados como variaveis locais, ou seja, só existe naquele escopo.

//Invocar uma função

myFunction(p1, p2); //Apenas chamamos pelo nome e passamos seus parametros;

// Return de uma função

// Quando a função for retornada ela para de ser executada e retorna algum valor. Se não tiver valor retorna undefined

//Arrow Functions

() => {};

// Declaração de função mais enxuta comparada a padrão

//Função Auto Invocada

/*Uma função autoinvocada, também conhecida como IIFE (Immediately Invoked Function Expression)
, é uma função em JavaScript que é executada imediatamente após ser definida*/

(function () {
  console.log("Esta é uma função autoinvocada.");
})();

(() => {
  console.log("Esta é uma função autoinvocada usando arrow function.");
})();

//Hoisting

// Hoisting é a capacidade do javascript de mover as declarações para o topo do escopo
// Isso se aplica a declaração de variaveis e declaração de funções.
// Por isso, elas podem ser chamadas antes de serem declaradas;

myFunction(5); //Função foi chamada antes dela ser declarada;

function myFunction(y) {
  return y * y;
}

//Funções são objetos

// Funções Rest Parameter

// Permite a função tratar um indefinido numero de argumentos como um array

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// Uso do this nas funções

//this é a palavra para se referir ao objeto instanciado. Ele está se refeindo ao objeto global

function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

//Alguns metodos como call, aply e bing podem refenciar o this para qualquer objeto.

//Call - É usado para chamar imediatamente uma função com um contexto específico e argumentos passados individualmente.

function saudacao() {
  console.log("Olá, " + this.nome);
}

let pessoa = {
  nome: "Maria",
};

//Declaração: funcão.call(contexto, ...args)
saudacao.call(pessoa);

//Nesta caso, o this deixou de referenciar ao objeto global e passou a se referenciar ao objeto pessoa. Ela não cria uma nova função.

//Bind - É usado para criar uma nova função vinculada a um contexto específico, mas não a chama imediatamente.

function saudacao() {
  console.log("Olá, " + this.nome);
}

let pessoa2 = {
  nome: "João",
};

//Declaração: funcao.bind(contexto)
let saudarJoao = saudacao.bind(pessoa2);
saudarJoao(); // Output: "Olá, João"

// Neste caso, o bind criou uma nova função passando pessoa2 como referencia. Nesta função o this passa a ser o objeto pessoa2.
// Depois esta função é invocada, ou seja, ela não é chamada imediatamente.

//Apply - Similar ao Call mas os argumentos são passados por array

//Declaração: funcão.apply(contexto,[...args])
saudacao.apply(pessoa, ["Maria", 25]);

//Funções Closures

/*Uma closure é basicamente uma função dentro de outra função, onde a função interna tem acesso às variáveis da função externa,
 mesmo após a função externa ter sido concluída.*/

function saudacao(nome) {
  return function () {
    console.log("Olá, " + nome + "!");
  };
}

let saudacaoJoao = saudacao("João");
saudacaoJoao(); // Output: "Olá, João!"

// A função saudacao retornou uma função e teve acesso a variavel nome, mesmo apos o termino da execução saudação.
