const arr = [10, 50, 30, 70, 80, 20, 90, 40];
const key = 30;

arr.forEach((element, index) => {
  if (element == key) {
    console.log("Este elemento foi encontrado no indice " + index + " de arr");
  }
});
