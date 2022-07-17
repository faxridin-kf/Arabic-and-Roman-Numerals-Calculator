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
  // let data = [];
  // str = str.replace(/[^IXVLCDMZ\d+\-*\/]/gi, (ch) => {
  //   if (ch !== " ") data.push(ch);
  //   return " ";
  // });
  // if (data.length > 0) throw Error("short");
  // let vars = str.split(/[+\-*\/]/g);
  // if (vars.length !== 2) throw Error("должно быть2 операнда");

  // const rome = /^[IXMCVZLD]+$/i;
  // const r = vars.reduce((s, v) => s + rome.test(v), 0);
  // if (r === 1)
  //   throw Error("оба числа должно быть записаны арабскими или римскими");
  // else if (r === 2) console.log(true);
  // vars = vars.map((v) => romToArab(v));

  // if (vars.some((v) => v < 1 || v > 10))
  //   throw Error("доступное зназ орперандома от 10 до 100");
  // let acr = str.match(/[+\-*\/]/)[0];
  // let res = Math.floor(eval(vars.join(acr)));
  // console.log(res);
  let data = [];
  str = str.replace(/[^IVXLCDMZ\d-+*\/]/gi, (ch) => {
    if (ch !== " ") data.push(ch);
    return "";
  });
  if (data.length > 0) throw Error("Недопустимые символы, введено это:" + data);
  let vars = str.split(/[+\-*\/]/g);
  if (vars.length !== 2) throw Error("Должно быть два операнда");
  const isRome = /[IVXLCDMZ]/i;
  const r = vars.reduce((s, v) => s + isRome.test(v), 0);
  if (r === 1) throw Error("должны быть арабские или римские цифры");
  else if (r === 2) vars = vars.map((v) => romToArab(v));
  if (vars.some((v) => v < 1 || v > 3000))
    throw Error("Только числа от 1 до 10");
  let acr = str.match(/[+\-*\/]/)[0];
  let result = Math.floor(eval(vars.join(acr)));
  console.log(result);
  return r === 0 ? result.toLocaleString() : arabTorome(result);
}

// const digits = {
//   Z: 2000,
//   M: 2000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };
// function rome2arab(string) {
//   return string
//     .toUpperCase()
//     .split("")
//     .reduce(function (s, v, i, arr) {
//       const [a, b, c] = [
//         digits[arr[i]],
//         digits[arr[i + 1]],
//         digits[arr[i + 2]],
//       ];
//       return b > a ? s - a : s + a;
//     }, 0);
// }

// function arab2rome(num) {
//   if (num < 1) return "";
//   let result = "";
//   for (key in digits)
//     while (num >= digits[key]) {
//       result += key;
//       num -= digits[key];
//     }
//   return result;
// }

// function calculator(string) {
//   let letter = [];
//   string = string.replace(/[^IVXLCDMZ\d-+*\/]/gi, (ch) => {
//     if (ch !== " ") letter.push(ch);
//     return "";
//   });
//   if (letter.length > 0)
//     throw Error("Недопустимые символы, введено это:" + letter);
//   let vars = string.split(/[+\-*\/]/g);
//   if (vars.length !== 2) throw Error("Должно быть два операнда");
//   const isRome = /[IVXLCDMZ]/i;
//   const r = vars.reduce((s, v) => s + isRome.test(v), 0);
//   if (r === 1) throw Error("должны быть арабские или римские цифры");
//   else if (r === 2) vars = vars.map((v) => rome2arab(v));
//   if (vars.some((v) => v < 1 || v > 10)) throw Error("Только числа от 1 до 10");
//   let acr = string.match(/[+\-*\/]/)[0];
//   let result = Math.floor(eval(vars.join(acr)));
//   console.log(result);
//   return r === 0 ? result.toLocaleString() : arab2rome(result);
// }
