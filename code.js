const tenName = [
    "",
    "ten",
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
  const illionsName = ["", "thousand", "million", "billion"];
  
  numberToWords = (number, string = "", showZero = true) => {
    const count = String(Math.floor(number)).length;
    const illionIndex = Math.floor((count - 1) / 3);
    return number < 0
      ? "negative" + numberToWords(-number)
      : number == 0
      ? showZero
        ? "null"
        : ""
      : string +
        (number < 20
          ? onesName[number]
          : number < 100
          ? tenName[Math.floor(number / 10)] +
            numberToWords(number % 10, " ", false)
          : number < 1000
          ? onesName[Math.floor(number / 100)] +
            " hundred" +
            numberToWords(number % 100, " and ", false)
          : illionsName[illionIndex]);
  };
  
  //The Math.floor() function always rounds down and returns the largest integer less than or equal to a given number.
  
  