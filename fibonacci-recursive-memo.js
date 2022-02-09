const isErrorInInput = require('./checkInput')
//check user input is a number
const args = process.argv;
if (isErrorInInput(args)) return;
const num = args[2];

console.log('starting' + num);

var fib = function(n) {
    if (n < 2){
      return 1;
    }else{
      return fib(n-2) + fib(n-1);
    }
 };

const res = fib(num);
console.log(res)


