/*module.exports = function multiply(first, second) {*/
  /*return parseInt(first) * parseInt (second);*/
  /*return toString ((+first) * (+second));*/
  /*let firstNumber = remainNumber(first);
  let secondNumber = remainNumber(second);
  let multiplyNumber = firstNumber * secondNumber;*/
  /*return(String(BigInt(+first) * BigInt(+second)));};*/

  module.exports = function multiply(first, second) {
    let endArr = [];
    var firstArr = first.split('').reverse();
    var secondArr = second.split('').reverse();
       
    for (var i = 0; i < firstArr.length; i++) {
      for (var j = 0; j < secondArr.length; j++) {
        var multiplyNumber = firstArr[i] * secondArr[j];
        endArr[i + j] = (endArr[i + j]) ? endArr[i + j] + multiplyNumber : multiplyNumber;
      }
    }
  
    for (var i = 0; i < endArr.length; i++) {
      var remainNumber = endArr[i] % 10;
      var carryoverNumber = Math.floor(endArr[i] / 10);
      endArr[i] = remainNumber;
  
      if (endArr[i + 1])
        endArr[i + 1] += carryoverNumber;
      else if (carryoverNumber != 0){
        endArr[i + 1] = carryoverNumber;
      }
    }
  
  
    return endArr.reverse().join('');
  }

  








