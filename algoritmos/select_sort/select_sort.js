const arr = [64, 25, 12, 22, 11];

for (let i = 0; i < arr.length; i++) {
  for (let j = 1 + i; j < arr.length; j++) {
    if (arr[j] < arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

console.log(arr);
