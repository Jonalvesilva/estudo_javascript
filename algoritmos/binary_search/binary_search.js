const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 8;

let left = 0;
let right = arr.length - 1;
let mid;
let result = () => {
  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);
    result = arr[mid];
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};

console.log(
  "Elemento foi encontrado por meio da binary search " + arr[result()]
);
