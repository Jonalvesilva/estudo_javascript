let tamanhoA = 4;
let tamanhoB = 5;
let teste = true;
let squares = 0;

describe("Paper Cut", () => {
  it("if squares count equals 5 after A=4 and B=5", () => {
    while (teste) {
      if (tamanhoB > tamanhoA) {
        squares += Math.floor(tamanhoB / tamanhoA);
        tamanhoB = tamanhoB - tamanhoA * Math.floor(tamanhoB / tamanhoA);
      } else if (tamanhoB < tamanhoA) {
        squares += Math.floor(tamanhoA / tamanhoB);
        tamanhoA = tamanhoA - tamanhoB * Math.floor(tamanhoA / tamanhoB);
      }

      if (tamanhoA == 0 || tamanhoB == 0) {
        teste = false;
      }
    }
    expect(squares).toBe(5);
  });
});
