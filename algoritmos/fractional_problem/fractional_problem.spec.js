const arr = [[500, 30]];
const W = 10;

let tempW = 0;

let result = 0;

describe("Fractional Problem", () => {
  it("if result of sum weigths equals 166.66666666666666 on limit weigth W=10", () => {
    for (let i = 0; i < arr.length; i++) {
      if (tempW + arr[i][1] > W) {
        const aux = (W - tempW) / arr[i][1];
        result += arr[i][0] * aux;
        break;
      }
      tempW += arr[i][1];
      result += arr[i][0];
    }
    expect(result).toBe(166.66666666666666);
  });
});
