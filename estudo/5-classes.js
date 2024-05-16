//Classes

//Uma classe é um molde para instanciarmos objetos

//No javascript temos a seguinte estrutura de Class

class ClasseName {
  constructor() {}
}

//Aqui temos uma declaração de uma classe ClasseName e um construtor

//Os construtores são os iniciadores para instanciar um objeto. É nele que passamos os parametros que forem definidos nele.

class Car {
  constructor(name, year) {}
}

//As classes podem ter atributos e metodos. Os atributos são o valores e os metodos são as ações de execução.
//No Javascript não é preciso declarar os atributos e seus modificadores, como no Typescript.
//Basta apenas defini-los no construtor através da palavra this e passarmos para eles os parametros que estão no construtor.

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//Agora que temos a class Car, vamos instancia-la. Para usarmos uma classe, fazemos assim:

new Car("Ford", "2004"); //Instanciando um objeto da classe Car com os parametros Ford e 2024
const obj = new Car("Ford", "2004"); //Pode ser guardado em uma variavel tbm

//Agora vamos incluir os metodos, que são as ações que são executadas

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

//Aqui temos que a classe Car tem um método Age, que executa e retorna quantos anos tem o carro em comparação com o ano atual
//Também podemos passar parametros para os métodos

//Para executarmos um metodo usamos assim:

new Car("Ford", "2004").age(); // Neste exemplo eu não tinha instancia dele então tive que instancia lo para acessar seu metodo
obj.age(); //Como aqui eu ja tinha instanciado e guardado na variavel objeto, basta apenas chamar o metodo pela variavel.

//Uma classe tem o conceito de herança. Uma herança é quando temos uma classe que herda os atributos e metodos de outra classe

//Estrutura Heranca

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

//Na primeira temos uma class car e na segunda temos uma classe model que herda a classe car

//Assim conseguimos utilizar os atributos e metodos de uma classe em outra classe

//Metodos getters and setters

//Metodo getters: São metodos que apenas retornam algum atributo
//Metodo setters: São metodos que alteram os atributos

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

//Temos aqui uma classe car, onde temos um método get que retorna this.carname e um método set que recebe um parametro x e altera this.carname

//As classes não fazem hoisting, ou seja, o javascript não joga as classes para o inicio do escopo

//Assim, não é permitido instanciar um objeto antes da declaração da classe.

//As classes tem o conceito de interface, mas será visto no Typescript

//Os metodos e atributos podem ser static, ou seja, podem ser usadas pela propria classe, sem a necessidade de instanciar um objeto

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

Car.hello(); //Note que aqui eu não precisei instanciar um objeto usando o new Car para acessar o metodo hello
