const arr = [10, 80, 30, 90, 40];
const pivot = arr[arr.length - 1];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < pivot) {
    if (i == 0) {
      arr[i] = arr[i];
    } else {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
    }
  }
  const middle = Math.ceil(arr.length / 2) - 1;

  [arr[middle], arr[arr.length - 1]] = [arr[arr.length - 1], arr[middle]];
}

console.log(arr);
