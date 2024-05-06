const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const len = arr.length;
const skipBlock = 4;
const target = 55;
let index = 0;
let indexResult = 0;
let result = 0;

describe("tests algorithm jump_search", () => {
  it("test if the target is within the intervals", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i * skipBlock] < target && target < arr[(i + 1) * skipBlock]) {
        const response = true;
        index += i * skipBlock;
        expect(response).toBe(true);
      }
    }
  });

  it("test if index of target equals 10", () => {
    for (let j = index; j < arr.length; j++) {
      if (arr[j] == target) {
        const response = j;
        expect(response).toBe(10);
      }
    }
  });
});
