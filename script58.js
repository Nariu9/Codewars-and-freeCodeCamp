var summation = function (num) {
 let arr = [];
 while (num > 0) {
  arr.push(num);
  num--;
 }
 return arr.reduce((a,b) => a+b);
}

console.log(summation(8));