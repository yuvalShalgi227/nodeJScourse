const isErrorInInput = require('./checkInput')
//check user input is a number
const args = process.argv;
if (isErrorInInput(args)) return;
const num = args[2];
///--------------------

function factorail(num) {
    if (num <2 ) return 1;
    res =1;
    let temp = num;
    for (i=0; i < temp; i++) {
        res *= num;
        num = num -1; 
    }
    return res;
}

function factorailRecuresive(num) {
    if (num < 2) return 1;
    while (num > 0) {
        console.log('1')
        return num *= factorailRecuresive(num -1);
    }
}

function factorailMemo(cash) {
    var n = cash;
    return function x() { 
        while (n > 0) {
            if (n < 2) return 1;
            return n *= x(n =n-1);
        }
    }
}

const y = factorailMemo(num);

console.log(y());