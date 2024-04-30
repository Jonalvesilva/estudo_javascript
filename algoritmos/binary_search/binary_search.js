const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

let mid = Math.ceil(0 + (arr.length / 2 - 1));

if (arr[mid] != target) {
  const indexTarget = arr.lastIndexOf(target);
  console.log(indexTarget);
} else {
}
