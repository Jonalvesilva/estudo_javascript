const arr = [1, 2, 4, 6, 3, 7, 8];
const n = 8;

//const arr = [1, 2, 3, 5];
//const n = 5;

const arrTemp = Array(n + 1).fill(0);

for (let i = 0; i < arr.length; i++) {
  if (arrTemp[arr[i]] == 0) arrTemp[arr[i]] = 1;
}

for (let i = 1; i < arrTemp.length; i++) {
  if (arrTemp[i] == 0) {
    console.log(
      `The missing number between ${arr[0]} to ${arr[arr.length - 1]} is ${i}`
    );
  }
}
