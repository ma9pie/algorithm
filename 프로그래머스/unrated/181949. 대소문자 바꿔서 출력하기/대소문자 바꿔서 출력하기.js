const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = '';
    const regExp = /^[A-Z]/;
    str.split("").map(s=>{
        if(regExp.test(s)){
            result += s.toLowerCase();
        }else{
            result += s.toUpperCase();
        }
    })
    console.log(result);
});