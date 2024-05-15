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
obj.age(); //Como aqui eu ja tinha instanciado e guardado na variavel objeto, basta apenas chamar o metodo pela variavel
