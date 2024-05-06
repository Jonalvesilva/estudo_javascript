//Tenho um arr de n elementos
//Tenho um bloco a ser pulado de tamanho m

const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const len = arr.length;
const skipBlock = 4;
const target = 55;

let indexResult = 0;
let result = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i * skipBlock] < target && target < arr[(i + 1) * skipBlock]) {
    const index = i * skipBlock;
    for (let j = index; j < arr.length; j++) {
      if (arr[j] == target) {
        indexResult += j;
        result += arr[j];
      }
    }
  }
}

console.log("Number " + result + "is at index " + indexResult);
