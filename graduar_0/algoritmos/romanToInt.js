const s = "IV";

var romanToInt = function (s) {
  const romanLiterals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanLiterals[s[i + 1]] > romanLiterals[s[i]]) {
      result += romanLiterals[s[i + 1]] - romanLiterals[s[i]];
      i += 1;
    } else {
      result += romanLiterals[s[i]];
    }
  }

  return result;
};

console.log(romanToInt(s));
