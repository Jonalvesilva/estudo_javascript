const arr = [38, 27, 43, 10];
//const arr = [38, 27, 43, 10, 11, 45, 51, 32]; Depois escreverei o codigo  para mais valores
let tempArr = Array(2)
  .fill()
  .map(() => []);

for (let i = 0; i < arr.length; i++) {
  let half = i >= arr.length / 2;
  if (half) tempArr[1].push(arr[i]);
  else tempArr[0].push(arr[i]);
}

let len = tempArr.length;
let teste = 0;

while (tempArr.length != arr.length) {
  const aux = tempArr.slice();
  tempArr = Array(2 * len)
    .fill()
    .map(() => []);

  let count = 0;
  let index = 0;
  let half = aux[0].length / 2;

  for (let j = 0; j < aux.length; j++) {
    for (let i = 0; i < aux[j].length; i++) {
      count += 1;
      if (count > half) {
        index += 1;
        count = 1;
      }
      tempArr[index].push(aux[j][i]);
    }

    len = tempArr.length;
  }
}

console.log(tempArr);

let tempArr2 = Array(tempArr.length / 2)
  .fill()
  .map(() => []);

const aux = tempArr.slice();

let count = 0;
let index = 0;

for (let i = 0; i < aux.length; i++) {
  count += 1;

  if (count > 2) {
    index += 1;
    count = 1;
  }
  if (count == 2) {
    aux[i - 1][0] > aux[i][0]
      ? tempArr2[index].push(aux[i][0], aux[i - 1][0])
      : tempArr2[index].push(aux[i - 1][0], aux[i][0]);
  }
}
let result = [];

for (let i = 0; i < tempArr2.length; i++) {
  if (i == 0) {
    if (tempArr2[i][i] < tempArr2[i + 1][i]) {
      result.push(tempArr2[i][i], tempArr2[i + 1][i]);
    } else {
      result.push(tempArr2[i + 1][i], tempArr2[i][i]);
    }
  }

  if (i == 1) {
    if (tempArr2[i][i] < tempArr2[i - 1][i]) {
      result.push(tempArr2[i][i], tempArr2[i - 1][i]);
    } else {
      result.push(tempArr2[i - 1][i], tempArr2[i][i]);
    }
  }
}

console.log(result);
