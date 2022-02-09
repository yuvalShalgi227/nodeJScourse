//check user input is a number
module.exports = (args) =>  {
    if (args.length < 3 ){
        console.log('missing input');
        return true;
    }

    if (isNaN(args[2])){
        console.log('wrong input, expected a number got:' + args[2]);
        return true;
    }
}
