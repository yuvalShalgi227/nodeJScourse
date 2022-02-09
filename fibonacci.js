const isErrorInInput = require('./checkInput')
const args = process.argv;
if (isErrorInInput(args)) return;
const num = args[2];
//-------------


function febonichiBuilder(num) {
    var res= [1,1]
    for (i=0; i <num -2; i++ ){
        let sum = res[res.length -1] + res[res.length -2];
        res.push(sum);
    }
    return res[res.length -1 ];
}

console.log(febonichiBuilder(num));

