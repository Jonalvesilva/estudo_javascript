var romanToInt = function (s) {
  let value = 0;

  for (let i = 0; i <= s.length - 1; i++) {
    const active = s[i];
    const next = s[i + 1];
    console.log(active, next);
    if (active == "I" && (next == "V" || next == "X")) {
      value += romanLiterals[next] - romanLiterals[active];
      i += 1;
    } else if (active == "X" && (next == "L" || next == "C")) {
      value += romanLiterals[next] - romanLiterals[active];
      i += 1;
    } else if (active == "C" && (next == "D" || next == "M")) {
      value += romanLiterals[next] - romanLiterals[active];
      i += 1;
    } else {
      value += romanLiterals[active];
    }
  }

  return value;
};

const romanLiterals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
