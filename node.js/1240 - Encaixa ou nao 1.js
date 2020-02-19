let input = require('fs').readFileSync('./node.js/1240.txt', 'utf8')
let lines = input.split('\n')
let numberInputs = lines.shift()
let inputs = lines

for (i of inputs) {
    let itens = i.split(" ")
    console.log(itens)
    itens[1].replace("\r", "")
    if (itens[0].includes(itens[1])) {
        console.log("encaixa")
    } else {
        console.log("nao encaixa")
    }
}