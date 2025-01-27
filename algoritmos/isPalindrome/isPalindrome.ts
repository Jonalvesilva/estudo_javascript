var isPalindrome = function (x) {
  const str = x.toString();
  let newValue = "";

  for (let i = str.length - 1; i >= 0; --i) {
    newValue += str[i];
  }

  return str === newValue;
};
