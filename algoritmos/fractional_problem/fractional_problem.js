/*Dados pesos and profits de N items na forma [profit,weight], coloque esses objetos em um knapsack de capacidade W 
 para pegar o total maximo de profit no knapsack. Nos podemos break items para maximizar o valor total do knapsack*/

/*const arr = [
  [60, 10],
  [100, 20],
  [120, 30],
];*/
//const W = 50;

const arr = [[500, 30]];
const W = 10;

let tempW = 0;

let result = 0;

for (let i = 0; i < arr.length; i++) {
  if (tempW + arr[i][1] > W) {
    const aux = (W - tempW) / arr[i][1];
    result += arr[i][0] * aux;
    break;
  }
  tempW += arr[i][1];
  result += arr[i][0];
}

console.log(result);
