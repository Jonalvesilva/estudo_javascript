//const arr = [38, 27, 43, 10];
const arr = [38, 27, 43, 10, 11, 45, 51, 32];
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

while (teste < 2) {
  const aux = tempArr.slice();
  tempArr = Array(2 * len)
    .fill()
    .map(() => []);

  let count = 0;
  let half = 0;

  for (let j = 0; j < aux.length; j++) {
    for (let i = 0; i < aux[j].length; i++) {
      half += 1;

      if (i < half - 1) {
        count += 1;
        half = 0;
      }
      console.log(count, half);
      tempArr[count].push(aux[j][i]);
    }

    len = tempArr.length;
  }

  teste += 1;
  console.log(tempArr);
}

/*tempArr = [];

for (let i = 0; i < tempArr2.length; i++) {
  let half = (i + 1) % 2 == 0;
  if (half) {
    tempArr2[i - 1][0] > tempArr2[i][0]
      ? tempArr.push([tempArr2[i][0], tempArr2[i - 1][0]])
      : tempArr.push([tempArr2[i - 1][0], tempArr2[i][0]]);
  }
}

tempArr2 = [];

for (let i = 0; i < tempArr.length; i++) {
  let half = (i + 1) % 2 == 0;
  if (half) {
  }
}*/
