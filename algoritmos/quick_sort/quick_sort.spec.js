const arr = [10, 80, 30, 90, 40];
const pivot = arr[arr.length - 1];

describe("Quick Sort", () => {
  it("if arr equals [ 10, 30, 40, 90, 80 ] after quick sort", () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        if (i == 0) {
          arr[i] = arr[i];
        } else {
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        }
      }
      const middle = Math.ceil(arr.length / 2) - 1;

      [arr[middle], arr[arr.length - 1]] = [arr[arr.length - 1], arr[middle]];
    }
    expect(arr).toEqual([10, 30, 40, 90, 80]);
  });
});
