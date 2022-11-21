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
  "hundred",
];

const xwy = [
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
const number = 101;
const illionsName = ["", "thousand", "million", "billion"];
const count = String(Math.floor(number)).length;
const illionIndex = Math.floor((count - 1) / 3);

function numberToWords(number) {
  if (number < 0) {
    return "negative" + " " + numberToWords(-number);
  } else if (number < 10) {
    return onesName[number];
  } else if (number < 20) {
    return xwy[number.toString()[1]];
  } else if (number < 101) {
    return (
      tensName[Math.floor(number / 10)] + " " + onesName[number.toString()[1]]
    );
  }
}

//funciton after 100 not working
// function numberToWords(number) {
//   number = 111
//   if(number < 0) {
//     "negative" + ' ' + numberToWords(-number);
//   } else if(number < 10) {
//     onesName[number];
//   } else if(number <  20) {
//     xwy[number.toString()[1]];
//   } else if(number < 100) {
//     tenName[Math.floor(number / 10)] + ' ' + onesName[number.toString()[1]];
//   } else if(number < 1000) {

//     onesName[Math.floor(number / 100)] +  " hundred" + ' ' + tenName[number.toString()[1]] + ' ' + onesName[number.toString()[2]];
//   } else if(number > 1000) {
//     'something'
//   }
// };
