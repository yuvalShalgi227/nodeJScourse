const isErrorInInput = require('./checkInput')
const args = process.argv;
if (isErrorInInput(args)) return;
const num = args[2];
//-------------

function febonichiRec(num) {
    if (num === 1 || num === 2 ) return 1
    return febonichiRec(num-2) + febonichiRec(num-1);
}
console.log(febonichiRec(num));

