const arr = [5, -2, 5, -4, 5, -12, 5, 5, 5, 20];
const k = 5;
let count = 0;

for (let i = 0; i <= arr.length; i++) {
  if (count == k) break;
  if (arr[i] < 0) {
    arr[i] = -1 * arr[i];
    count += 1;
  }

  if (arr[i] == 0) {
    count += 1;
  }
}
const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);
