// 01. Write a program that prints the numbers from 1 to 100, but for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
var fizzBuzz = function (n) {
  let data = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      data.push("FizzBuzz");
    } else if (i % 3 === 0) {
      data.push("Fizz");
    } else if (i % 5 === 0) {
      data.push("Buzz");
    } else {
      data.push(i);
    }
  }
  return data;
};
console.log(fizzBuzz(100));
