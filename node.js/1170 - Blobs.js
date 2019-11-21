let input = require('fs').readFileSync('./node.js/1170.txt', 'utf8')
let lines = input.split('\n')
let numberInputs = lines.shift()
let inputs = lines

for (let i = 0; i < numberInputs; i++) {
    console.log(blobs(inputs[i]) + " dias")
}

function blobs(number) {
    let cont = 0;
    while (number > 1) {
        number = number / 2
        cont++
    }
    return cont
}