//Objetos

//Estrutura que pode conter varios valores. São designados por par de chave e valor;

//Exemplo objeto

const car = { type: "Fiat", model: "500", color: "white" };

//É pratica comum declarar objetos como const.

//Note que neste exemplo, temos varios valores e todos seguindo chave:valor

//As chaves são chamadas de propriedades e o valor é o valor desta propriedade.

// Podemos acessar o objeto de duas formas:

car.type;
car["type"];
car[variavel];

//Nos objetos também podemos ter métodos. Esses metodos podem ser armazenados nas propriedades e chamados por ela.

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

person.fullName();

//Uso do this

//Assim como as funções também são objetos, elas seguem a palavra this. Explicado no capitulo de funções.

//Criando um objeto

//Podemos criar um  objeto de tres formas:

const obj = {}; //Objeto literal
const obj2 = new Object(); //Instancia da classe Objeto
const obj3 = Object.create(); //Usando o metodo create da classe Objeto

//Objetos são mutaveis. Eles são endereçados por referencia e nao por valor

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const x = person;
x.age = 10;

//Neste exemplo, a const x não é uma copia de person2. Tanto x quanto person2 são o mesmo objeto.

//Adicionando propriedades: Voce pode inserir propriedades da seguinte maneira

person.nationality = "English"; // declara a propriedade e atribui o valor para ela

//Deletando propriedades: Voce pode deletar propriedades da seguinte maneira

delete person.age;
delete person["age"];
delete person[variavel];

//Usando a classe Object podemos acessar varios metodos. Esses metodos pode ser usados para trabalhar com objetos criados. Alguns deletes

//Object Assign: Copia todas as propriedades de um objeto para o outro. Caso a propriedade ja exista, ela vai ser substituida.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

//Object Entries: Retorna um array de arrays de [chave,valor] do objeto.

let obj4 = { foo: "bar", baz: 42 };
console.log(Object.entries(obj4)); // [ ['foo', 'bar'], ['baz', 42] ]

//Object Freeze: Congela o objeto. Não permite que o objeto receba propriedades

Object.freeze(obj4);

//Object.hasOwn: Retorna true se tiver alguma propriedade

const object1 = {
  prop: "exists",
};

console.log(Object.hasOwn(object1, "prop")); // Expected output: true

//Object Keys: Retorna um array apenas com as propriedades do objeto

let obj5 = { foo: "bar", baz: 42 };
console.log(Object.keys(obj5)); // console: ['foo','baz']

//Object Values: Retorna um array apenas com os valores das propriedades do objeto

var obj6 = { foo: "bar", baz: 42 };
console.log(Object.values(obj6)); // ['bar', 42]
