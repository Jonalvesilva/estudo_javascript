const arr = [
  ["a", 4, 20],
  ["b", 1, 10],
  ["c", 1, 40],
  ["d", 1, 30],
];

describe("Job Sequency", () => {
  it("if result equals [c,a] after max profit calc per deadline", () => {
    const result = [];

    arr.sort((a, b) => {
      return b[2] - a[2];
    });

    let deadline = 0;

    for (let i = 0; i < arr.length; i++) {
      if (deadline < arr[i][1]) {
        deadline += 1;
        result.push(arr[i][0]);
      }
    }
    expect(result).toEqual(["c", "a"]);
  });
});
