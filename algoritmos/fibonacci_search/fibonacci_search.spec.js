const arr = [2, 3, 4, 10, 40];
const x = 10;
const n = arr.length;
const index = arr.indexOf(x);

describe("Teste Fibonacci Search", () => {
  let fibMMm2 = 0; //Definido o valor m-2 inicial
  let fibMMm1 = 1; //Definido o valor m-1 inicial
  let fibM = fibMMm1 + fibMMm2; //Fibonacci inicial

  it(`Verifica se target x está no array após a fibonacci e se index é ${index}`, () => {
    while (fibM <= n) {
      fibMMm2 = fibMMm1;
      fibMMm1 = fibM;
      fibM = fibMMm1 + fibMMm2;
    }

    let offset = -1;
    let result = 0;

    while (fibM > 1) {
      let i = Math.min(offset + fibMMm2, n - 1);

      if (arr[i] < x) {
        fibM = fibMMm1;
        fibMMm1 = fibMMm2;
        fibMMm2 = fibM - fibMMm1;
        offset = i;
      } else if (arr[i] > x) {
        fibM = fibMMm2;
        fibMMm1 = fibMMm1 - fibMMm2;
        fibMMm2 = fibM - fibMMm1;
      } else {
        result = i;
        return expect(result).toBe(index);
      }
    }
  });
});
