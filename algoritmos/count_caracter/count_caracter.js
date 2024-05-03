const input = "#GeeKs01fOr@gEEks07";
let upper = 0;
let lower = 0;
let numbers = 0;
let special = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90) upper += 1;
  else if (input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 122)
    lower += 1;
  else if (input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57)
    numbers += 1;
  else special += 1;
}

console.log("Upper: ", upper);
console.log("Lower: ", lower);
console.log("Number: ", numbers);
console.log("Special: ", special);
