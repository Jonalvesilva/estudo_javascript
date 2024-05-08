//Dado um papel de tamanho A x B. A tarefa é cortar em quadrados de qualquer tamanho.
//Encontrar o minimo de quadrados possiveis

//let tamanhoA = 13;
//let tamanhoB = 29;

let tamanhoA = 4;
let tamanhoB = 5;
let teste = true;
let squares = 0;

while (teste) {
  if (tamanhoB > tamanhoA) {
    squares += Math.floor(tamanhoB / tamanhoA);
    tamanhoB = tamanhoB - tamanhoA * Math.floor(tamanhoB / tamanhoA);
  } else if (tamanhoB < tamanhoA) {
    squares += Math.floor(tamanhoA / tamanhoB);
    tamanhoA = tamanhoA - tamanhoB * Math.floor(tamanhoA / tamanhoB);
  }

  if (tamanhoA == 0 || tamanhoB == 0) {
    teste = false;
  }
}

console.log(squares);
