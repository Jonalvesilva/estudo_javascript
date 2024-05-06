//const arr = [1, 2, 4, 6, 3, 7, 8];
//const n = 8;
//const result = 5;

const arr = [1, 2, 3, 5];
const n = 5;
const result = 4;

describe("test algorithm find_missing_number", () => {
  it(`test if the missing number between ${arr[0]} to ${
    arr[arr.length - 1]
  } is ${result}`, () => {
    const arrTemp = Array(n + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
      if (arrTemp[arr[i]] == 0) arrTemp[arr[i]] = 1;
    }

    for (let i = 1; i < arrTemp.length; i++) {
      if (arrTemp[i] == 0) {
        expect(i).toBe(result);
      }
    }
  });
});
