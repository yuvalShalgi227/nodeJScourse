
var arg = process.argv.splice(2);


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
    if (num === 0 || num === 1) return 1;
    let res = num;
    while (num > 0) {
        num = num -1;
        return res *= factorail2(num);
    }
}

console.log(factorail2(arg[0]))