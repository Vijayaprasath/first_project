function sumOfNumbers(number1, number2, callback) {
    let sum = number1 + number2;
    callback(sum);
  }
  function displayResult(total) {
    console.log(total);
  }
  
  sumOfNumbers(5, 5, displayResult);

  module.exports = {sumOfNumber,displayResult}