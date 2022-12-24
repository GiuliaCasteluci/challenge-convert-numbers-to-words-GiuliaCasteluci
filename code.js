const onesName = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const teens = [
  "ten",
  "eleven",
  "twelve",
  "Thirteen",
  "Fifteen",
  "Fourteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
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
  "hundred",
  "thousand",
  "million",
  "billion"
];


const number = 101;
const count = String(Math.floor(number)).length;
const illionIndex = Math.floor((count - 1) / 3);

function numberToWords(number) {
  if (number < 0) {
    return "negative" + " " + numberToWords(-number);
  } else if (number < 10) {
    return onesName[number];
  } else if (number < 20) {
    return teens[number.toString()[1]];
  } else if (number < 101) {
    return (
      tensName[Math.floor(number / 10)] + " " + onesName[number.toString()[1]]
    );
  }
}


//funciton after 100 not working
function number2(number) {
  console.log(number)
  if (number < 0) {
    return "negative" + ' ' + numberToWords(-number);
  } else if (number < 10) {
    return onesName[number];
  } else if (number < 20) {
    return teens[number.toString()[1]];
  } else if (number < 100) {
    return tensName[Math.floor(number / 10)] + ' ' + onesName[number.toString()[1]];
  } else if (number < 1000) {
    return onesName[Math.floor(number / 100)] + " hundred" + ' ' + tensName[number.toString()[1]] + ' ' + onesName[number.toString()[2]];
  } else if (number > 999 && number < 10000000) {
    //convert numbers > 1000 to words
    // new logic for numbers > 999
    //fix undefined
    return  onesName[Math.floor(number / 1000)] + " thousand" + ' ' + tensName[number.toString()[1]] + ' ' + onesName[number.toString()[2]];
  } else if (number < 1000) {
    return onesName[Math.floor(number / 100)] + " hundred" + ' ' + tensName[number.toString()[1]] + ' ' + onesName[number.toString()[2]];
}
};