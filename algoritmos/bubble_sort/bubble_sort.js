//const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr = [4, 1, 3, 9, 7];

const numPassos = arr.length - 1;
const numComparacao = (arr.length * (arr.length - 1)) / 2;

for (let i = 1; i <= numPassos; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (j + 1 < arr.length) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr);
