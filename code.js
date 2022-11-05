
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
  "hundred"
];

function numbersToWords(){
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
    
    let input= document.getElementById("numbers").value;
    document.getElementById("numword").innerHTML=onesName[eval(input)];
}

