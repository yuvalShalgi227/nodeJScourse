
//check user input is a number
const num = process.argv[2];
var res= [1,1]

function febonichiBuilder(num) {
    for (i=0; i <num -2; i++ ){
        let sum = res[res.length -1] + res[res.length -2];
        res.push(sum);
    }
    return res[res.length -1 ];
}

function febonichiRec(num) {
if (num === 1 || num === 2 ) return 1
    return febonichiRec(num-2) + febonichiRec(num-1);
}
console.log(febonichiRec(num));

