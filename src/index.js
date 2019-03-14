
module.exports = function getZerosCount(number, base) {
  var number2 = number;
  var base2 = base;
  for (var i = 2; i <= base; i++) {
    if (base2 % i === 0) {
      var k = 0;
      while (base2 % i === 0) {
        base2 = Math.floor(base2 / i);
        k++;
    }
    var number3 = number;
    var m = 0;
    while (number3 / i > 0) {
      m = m + Math.floor(number3 / i);
      number3 = Math.floor(number3 / i);
    }
    if (number2 > m / k) { 
      number2 = m / k;
    } 
  }
}
return Math.floor(number2);
}