'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
main();
});

/**process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
       
});
**/
function readLine() {
    return inputString[currentLine++];
}



function getLetter(s) {
    let letter;
    let key = s[0];
    switch(key){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            letter = "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C";
            break;
        default:
            letter = "D";
    }    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));

    process.exit();
}