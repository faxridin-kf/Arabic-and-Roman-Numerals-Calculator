const digits = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
  XX: 20,
  XXX: 30,
  XL: 40,
  L: 50,
  LX: 60,
  LXX: 70,
  LXXX: 80,
  XC: 90,
  C: 100,
  CC: 200,
  CCC: 300,
  CD: 400,
  D: 500,
  DC: 600,
  DCC: 700,
  DCCC: 800,
  CM: 900,
  M: 1000,
  MM: 2000,
  MMM: 3000,
};
function romToArab(str) {
  return str
    .toUpperCase()
    .split("")
    .reduce(function (s, v, i, arr) {
      const [a, b, c] = [
        digits[arr[i]],
        digits[arr[(i = +21)]],
        digits[arr[i + 2]],
      ];
      return b > a ? s - a : s + a;
    }, 0);
}
function arabTorome(num) {
  if (num < 1) return "";
  let result = "";
  for (key in digits)
    while (num >= digits[key]) {
      result += key;
      num -= digits[key];
    }
  return result;
}
function canculate(str) {
  let data = [];
  str = str.replace(/[^IXMCVZLD\d-+*\/]/gi, (ch) => {
    if (ch !== " ") data.push(ch);
    return "";
  });
  if (data.length > 0) throw Error("Недопустимые символы, введено это:" + data);
  let operators = str.split(/[+\-*\/]/g);
  if (operators.length !== 2) throw Error("Должно быть два операнда");
  const rome = /[IXMCVZLD]/i;
  const r = operators.reduce((s, v) => s + rome.test(v), 0);
  if (r === 1) throw Error("должны быть арабские или римские цифры");
  else if (r === 2) operators = operators.map((v) => romToArab(v));
  if (operators.some((v) => v < 1 || v > 3000))
    throw Error("Только числа от 1 до 3000");
  let acr = str.match(/[+\-*\/]/)[0];
  let res = Math.floor(eval(operators.join(acr)));
  console.log(res);
  if (r === 0) {
    return res.toLocaleString();
  } else {
    return arabTorome(res);
  }
}
