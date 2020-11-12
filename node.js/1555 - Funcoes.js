let input = require('fs').readFileSync('./1555.txt', 'utf8')
let lines = input.split('\n')
let numberInputs = lines.shift()
let inputs = lines

for (i of inputs) {
    let itens = i.split(" ")
    itens[1].replace("\r", "")
    console.log(bigger(itens[0], itens[1]) + " ganhou")
}

function bigger(x, y) {
    //Rafael
    //(x, y) = (3x)² + y²
    let rafael = ((3 * x) ** 2) + y ** 2
        //Beto
        //(x, y) = 2(x²) + (5y)²
    let beto = (2 * (x ** 2)) + ((5 * y) ** 2)
        //Carlos
        //(x, y) = -100x + y³
    let carlos = (-100 * x) + (y ** 3)

    if (rafael > carlos && rafael > beto) {
        return "Rafael"
    } else if (carlos > rafael && carlos > beto) {
        return "Carlos"
    } else {
        return "Beto"
    }

}