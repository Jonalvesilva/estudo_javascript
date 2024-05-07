//Dado um array ordenado de tamanho n e um elemento x a ser procurado
//Retorne index de x se ele estiver presente, caso contrario retorne -1

const arr = [2, 3, 4, 10, 40];
const x = 10;
//const x = 11;

function fibonacci_search(arr, x, n) {
  let fibMMm2 = 0; //Definido o valor m-2 inicial
  let fibMMm1 = 1; //Definido o valor m-1 inicial
  let fibM = fibMMm1 + fibMMm2; //Fibonacci inicial

  //Será realizado as somas fibonacci enquanto o fibonnaci for menor que ou igual a n
  while (fibM <= n) {
    fibMMm2 = fibMMm1; //O m-2 recebe m-1
    fibMMm1 = fibM; //O m-1 recebe o fibonacci
    fibM = fibMMm1 + fibMMm2; //O proximo fibonacci
  }

  let offset = -1; //Marca o intervalo eliminado

  while (fibM > 1) {
    let i = Math.min(offset + fibMMm2, n - 1); // Checa se fibMMm2 é uma local valido

    //Se x é maior que o valor de arr no index fibMMm2, corta o array do offset até i
    if (arr[i] < x) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    }
    //Se x é menor que o valor de arr no index fibMMm2, corta o array depois de i+1
    else if (arr[i] > x) {
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    }
    //Encontra elemento. Retorna index
    else return i;
  }
  //Comparando o ultimo elemento com x
  if (fibMMm1 && arr[n - 1] == x) {
    return n - 1;
  }
  //Elemento não encontrado
  return -1;
}

console.log(fibonacci_search(arr, x, arr.length));
