//Operadores Basicos

let x = 10;  //Atribuição
let y = 5+2; //Adição
let z = 5*2; //Multiplicacao
let a = 5/2; //Divisão
let b = 5-2; //Subtração
let c = 5%2; //Mod
let d = 1++; //Incremento
let e = 1--; //Decremento


//Operadores com atribuição

x+=1   //x = x + 1
x-=1   //x = x - 1
x *=1  //x = x * 1 
x /=1  //x = x / 1
x %=1  //x = x % 1
x **=1 //x = x ** y 

//Operadores Comparadores

a==b  //Igual ao valor
a===b //Igual em valor e em tipo
a!=b  //Não Igual
a!==b //Não Igual em valor e em tipo
a>b   //Maior que
a<b   //Menor que
a>=b  //Maior ou igual
a<=b  //Menor ou igual

//Operador Ternario

a ? b:c; // Condição ? caso true : case false;

//Operadores com String

let texto = 'texto' + ' '+ texto //Concatenar
texto+= 'teste' // Concatenar: texto = texto + 'teste';

//Adição de String com Numeros - Typescript não permite

let anotherText = '5' + 5; //'55': Retorna string mesmo concatenando string com number;

//Operadores Logicos (booleanos)

a && b //Logica E: será true se ambas condições (a,b) forem true;
a || b //Logica OR: será true se qualquer das condições (a,b) forem true;
!a     //Logica NOT: nega uma  condição. Por exemplo, se a condição for true, negando ela, ela vai ser false.

//Operadores de tipo

typeof a      //Retorna o tipo da variável;
pessoa instanceof Pessoa  //Retorna true se um objeto é uma instancia de uma determinada classe ou construtor; Neste exemplo, verifica se a instancia pessoa é da classe Pessoa.

//Operador Nullish

a = null ?? b; //Caso o valor seja  null ou indefinido ele retorna um valor padrão. Neste caso o valor padrão é b;


