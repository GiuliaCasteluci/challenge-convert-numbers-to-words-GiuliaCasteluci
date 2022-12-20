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
At first, i used  Conditional (ternary) operator for my statments, but it just made things complicated to read. So i changed that. Also, i had a lot of challenge making the if else statment work, a lot of debbuging. Also, I thought on using while loops for example: 
while (start > 0) {
	end = start;
	chunks.push(string.slice((start = Math.max(0, start - 3)), end)); 
}
All this  does is start from right to left, grabbing every 3 digits and pushing them into a chunks array. The while loops would take longer and make it more complicate.