const onesName = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tensName = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const illionsName = [
  '',
  'hundred',
  'thousand',
];

function numberToWords(number) {
  let index = number.toString().slice(-2)
  let n =  index < 10 || index > 20 ? number.toString().slice(-1) : index
  let word = '';
  let count = String(Math.floor(number)).length;
  let illionIndex = Math.floor((count - 1) / 3);
  let hundreds = number.toString()[1] > 0 ? onesName[number.toString()[1]] + ' hundred' : ''
  let decimals = number.toString()[2] > 0 ? tensName[number.toString()[2]] : ''

  if (number == 0) {
    return 'zero'
  } 

  if (number == 10000) {
    return 'ten thousand'
  }

  if (number < 0) {
    word = "negative" + ' ' + numberToWords(-number);
  } else if (number < 20 && number > 0) {
    word = onesName[number];
  } else if (number < 100) {
    word = tensName[Math.floor(number / 10)] + ' ' + onesName[number.toString()[1]];
  } else if (number < 1000) {
    word = onesName[Math.floor(number / 100)] + " hundred" + ' ' + tensName[number.toString()[1]] + ' ' + onesName[n];
  } else if (number > 999 && number < 10000) {
    word = onesName[Math.floor(number / 1000)] + ' ' + illionsName[illionIndex + 1] + ' ' + hundreds + ' ' + decimals + ' ' + onesName[n]
  }

  return word.trim()
};
  