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
        return num *= factorailMemo(num -1);
    }
}

function factorailMemo(cash) {
    return (n =cash) => { 
        while (n > 0) {
            if (n < 2) return 1;
            return n *= x(n-1);
        }
    }
}


const x = factorailMemo(num);

console.log(x());