const arr = [2, 5, 3, 0, 2, 3, 0, 3];
const maxArr = Math.max(...arr);

const countArray = new Array(maxArr + 1).fill(0);
const outputArray = new Array(arr.length);

for (let i = 0; i < countArray.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == i) count += 1;
  }
  countArray[i] = count;
}

for (let i = 1; i < countArray.length; i++) {
  countArray[i] = countArray[i - 1] + countArray[i];
}

for (let i = arr.length - 1; i >= 0; i--) {
  outputArray[countArray[arr[i]] - 1] = arr[i];
  countArray[arr[i]] = --countArray[arr[i]];
}

console.log(outputArray);
