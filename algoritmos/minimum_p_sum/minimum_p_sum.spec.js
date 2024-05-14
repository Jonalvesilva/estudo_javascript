//Encontre a soma dos produtos de dois arrays de mesmo tamanho, dado que k modificações foram permitidas no array 1
//Em cada modificação, um elemento do array 1 pode ser tanto incrementado ou decerementado em 2

const arr1 = [1, 2, -3];
const arr2 = [-2, 3, -5];
const k = 5;

let indexElement = 2;
let incDec = 2;
let result = 0;

describe("Minimum Product Sum", () => {
  it("if sum of products after modify equals -31", () => {
    for (let i = 0; i < k; i++) {
      arr1[indexElement] += incDec;
    }

    for (let i = 0; i < arr1.length; i++) {
      result += arr1[i] * arr2[i];
    }
    expect(result).toBe(-31);
  });
});
