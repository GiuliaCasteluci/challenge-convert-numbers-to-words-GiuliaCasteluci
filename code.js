const digits = ['',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'];
const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'];

function numberToWords(number) {
 // If the number is negative, add the word 'negative' in front of the result
  if (number < 0) {
    return 'negative ' + numberToWords(Math.abs(number));
  }
  
  if (number >= 1000000) {
    return numberToWords(Math.floor(number / 1000000)) + ' million ' + numberToWords(number % 1000000)
  }

  if (number >= 1000) {
    return numberToWords(Math.floor(number / 1000)) + ' thousand ' + numberToWords(number % 1000);
  }

  if (number >= 100) {
    return numberToWords(Math.floor(number / 100)) + ' hundred ' + numberToWords(number % 100);
  }

  if (number < 20) {
    return digits[number];
  }

  return tens[Math.floor(number / 10)] + ' ' + digits[number % 10];

};

inputField = document.getElementById("field")
inputField.addEventListener('change', () => {
  if (inputField.value === '0') {
    document.getElementById("numword").textContent = 'zero';
  } else {
    document.getElementById("numword").textContent = numberToWords(inputField.value)
  }
})
