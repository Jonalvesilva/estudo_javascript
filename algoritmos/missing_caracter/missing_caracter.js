let alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let arr = alfabeto.slice();

const input = "welcome to geeksforgeeks";

input
  .replace(/\s/g, "")
  .split("")
  .forEach((element) => {
    if (arr.includes(element)) {
      let index = arr.indexOf(element);
      arr.splice(index, 1);
    }
  });

console.log(arr.join(""));
