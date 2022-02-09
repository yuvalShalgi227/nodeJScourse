const isErrorInInput = require('./checkInput')
//check user input is a number
const args = process.argv;
if (isErrorInInput(args)) return;
const num = args[2];

function factorail(num) {
    if (num === 0 || num === 1) return 1;
    let res =1;
    let temp = num;
    for (i=0; i<temp; i++) {
        res *= num;
        num = num -1; 
    }
    return res;
}

function factorail2(num) {
    if (num <2 ) return 1;
    res =1;
    let temp = num;
    for (i=0; i < temp; i++) {
        res *= num;
        num = num -1; 
    }
    return res;
}

function factorailMemo(num) {
    if (num < 2) return 1;
    while (num > 0) {
        return num *= factorailMemo(num -1);
    }
}

console.log(factorailMemo(num))