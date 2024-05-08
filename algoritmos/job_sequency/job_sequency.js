//Dado um array de trabalhos onde cada trabalho tem uma deadline e um profit atrelado ao job se é terminado antes da deadline;
//Minino possivel para a deadline é 1
//Maximize o total profit se somente um trabalho agendado na hora;
//[[JobID, Deadline, Profit],...]

// a - b : ascendente
// b - a : descendente

const arr = [
  ["a", 4, 20],
  ["b", 1, 10],
  ["c", 1, 40],
  ["d", 1, 30],
];

/*
const arr = [
  ["a", 2, 100],
  ["b", 1, 19],
  ["c", 2, 27],
  ["d", 1, 25],
  ["e", 3, 15],
];*/

const result = [];

arr.sort((a, b) => {
  return b[2] - a[2];
});

let deadline = 0;

for (let i = 0; i < arr.length; i++) {
  if (deadline < arr[i][1]) {
    deadline += 1;
    result.push(arr[i][0]);
  }
}

console.log(result);
