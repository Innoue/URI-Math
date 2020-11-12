let input = require('fs').readFileSync('./1240.txt', 'utf8')
let lines = input.split('\n')
let numberInputs = lines.shift()
let inputs = lines

for (i of inputs) {
    let itens = i.split(" ")
    let first = itens[0]
    let second = itens[1].replace("\r", "")
    let position = first.length - second.length

    if (first.indexOf(second, position) != -1) {
        console.log("encaixa")
    } else {
        console.log("nao encaixa")
    }
}