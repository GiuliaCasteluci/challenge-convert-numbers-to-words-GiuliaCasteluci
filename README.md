# Kenzie Academy Challenge: Convert Numbers to Words

Follow the instructions provided on `my.kenzie.academy` for this challenge. The `code.js` file is a placeholder. Feel free to rename it or add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Project Plan

_(Put your project plan here. It could be pseudocode, an outline-style development plan, etc. But whatever form you choose, it should be detailed enough that another developer could feasibly use it to implement your solution.)_

First, for the basic part of the challenge 0-100. I create different arrays to storage the numbers that i wanted to convert into words. Secondly, after studying my options,  i realized that the best way was to use a if/else statment. I tried to use a switch case because for bigger function, it is preferable, but it just didn't work. Third, I started writing the if statment for example, if number is less than 0 return - my array of number, and i kept on writing. 
Intermediate challenge, i chose to create a second function and keep working if if/else statments
## Reflection

What different approaches or techniques did you consider when planning your implementation? 
_(Put your reflection answer here.)_

For the basic level and numbers up to 10.000 I was fine doing else if statements +  toString method (converts the number to a string to display the result). But the more advanced the challenge got, the more complicated my function became. 
Because I was using else if statement for every hundred, my function was getting huge and messy even though it was  working up to 10.000

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

I decided to change my strategy for the Advanced level after talking to coaches and doing research i realized my method was going to get complicated and messy to increase my numbers to a million. First, i kept the checking for the input number == 0, and I added a negative checking. Therefore,  If the number is negative, the function returns the string 'negative' followed by the number placed by the user. Then, using recursive js which is a function that calls itself, I was able to create a much simpler function. For example if the number is between 1000 and one million, the function calls itself with the math.floor of the input divided by 1000, followed by the string 'thousand', followed by the result of calling itself. And the same process for hundreds and millions. 

I also moved addEventListener from html to js because ig is better practice.
