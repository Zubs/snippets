"use strict";
function rot13(str) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabets = alpha.map((x) => String.fromCharCode(x));
    let input = str.split('');
    let output = [];
    input.forEach((letter) => {
        let index = alphabets.indexOf(letter);
        if (letter.match(/[a-z]/i)) {
            if (index + 13 <= 25) {
                output.push(alphabets[index + 13]);
            }
            else {
                let xx = (index + 13) % 26;
                output.push(alphabets[xx]);
            }
        }
        else {
            output.push(letter);
        }
    });
    return output.join('');
}
console.log(rot13("SERR PBQR PNZC"));
