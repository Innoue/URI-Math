// Conversão Binário para Decimal
function binDec(number) {

    let length = number.length - 1
    let result = 0

    number.split('').forEach((item) => {
        result += item * Math.pow(2, length)
        length--
    })
    return result
}

// Conversão Binário para Hexadecimal
function binHex(number) {
    number = number.split('')
    let arr = []
    let temp = ""
    let cont = 1
    if (number.length % 4 != 0) {
        let mod = number.length % 4
        let resto = 4 - mod
        for (let i = 0; i < resto; i++) {
            number.unshift("0")
        }
    }
    for (let i = number.length; i >= 0; i--) {
        if (cont <= 4) {
            temp = number.pop() + temp
            if (cont == 4) {
                arr.unshift(temp)
                cont = 0
                temp = ""
            }
        }
        cont++
    }
    let result = ""

    arr.forEach(item => {
        result = result + tableBinHex(item)
    });
    return result
}

// Conversão Decimal para Binário
function decBin(number) {
    number = parseInt(number)
    let result = ""
    while (number >= 2) {
        // console.log("Before = number: " + number + " - result: " + result)
        result = (number % 2).toString() + result
        number = Math.trunc(number / 2)
            // console.log("After = number: " + number + " - result: " + result + "\n")
    }
    return number.toString() + result
}

// Conversão Decimal para Hexadecimal
function decHex(number) {
    number = parseInt(number)
    let result = ""
    while (number >= 16) {
        // console.log("Before = number: " + number + " - result: " + result)
        result = tableDecHex((number % 16).toString()) + result
        number = Math.trunc(number / 16)
            // console.log("After = number: " + number + " - result: " + result + "\n")
    }
    result = number.toString() + result
    return result
}

// Conversão Hexadecimal para Binário
function hexBin(number) {
    number = number.split('')
    let arr = []
    let check = true
    for (i of number) {
        arr.push(tableHexBin(i))
    }
    return parseInt(arr.join(""))
}

// Conversão Hexadecimal para Decimal
function hexDec(number) {
    number = number.toString().split("")
    let result = 0
    let numberLength = number.length - 1
    for (i of number) {
        i = parseInt(tableHexDec(i))
        result += i * Math.pow(16, numberLength)
        numberLength--
    }
    return result
}

function tableDecHex(number) {
    number = number.toString()
    switch (number) {
        case "10":
            return "A"
            break;
        case "11":
            return "B"
            break;
        case "12":
            return "C"
            break;
        case "13":
            return "D"
            break;
        case "14":
            return "E"
            break;
        case "15":
            return "F"
            break;
        default:
            return number
            break;
    }
}

function tableHexDec(number) {
    number = number.toString()
    switch (number) {
        case "A":
            return "10"
            break;
        case "B":
            return "11"
            break;
        case "C":
            return "12"
            break;
        case "D":
            return "13"
            break;
        case "E":
            return "14"
            break;
        case "F":
            return "15"
            break;
        default:
            return number
            break;
    }
}


function tableBinHex(number) {
    switch (number) {
        case "0000":
            return "0"
            break
        case "0001":
            return "1"
            break
        case "0010":
            return "2"
            break
        case "0011":
            return "3"
            break
        case "0100":
            return "4"
            break
        case "0101":
            return "5"
            break
        case "0110":
            return "6"
            break
        case "0111":
            return "7"
            break
        case "1000":
            return "1000"
            break
        case "1001":
            return "9"
            break
        case "1010":
            return "A"
            break
        case "1011":
            return "B"
            break
        case "1100":
            return "C"
            break
        case "1101":
            return "D"
            break
        case "1110":
            return "E"
            break
        case "1111":
            return "F"
            break
        default:
            return "error"
            break
    }
}

function tableHexBin(number) {
    switch (number) {
        case "0":
            return "0000"
            break
        case "1":
            return "0001"
            break
        case "2":
            return "0010"
            break
        case "3":
            return "0011"
            break
        case "4":
            return "0100"
            break
        case "5":
            return "0101"
            break
        case "6":
            return "0110"
            break
        case "7":
            return "0111"
            break
        case "8":
            return "1000"
            break
        case "9":
            return "1001"
            break
        case "A":
            return "1010"
            break
        case "B":
            return "1011"
            break
        case "C":
            return "1100"
            break
        case "D":
            return "1101"
            break
        case "E":
            return "1110"
            break
        case "F":
            return "1111"
            break
    }
}

let numberInputs = 3
for (let i = 0; i < numberInputs; i++) {
    let input = ""
    input = input.split(" ")
    let number = input[0]
    let base = input[1]

    switch (base) {
        case "dec":
            console.log(decBin(number) + " bin")
            console.log(decHex(number) + " hex")
            break
        case "bin":
            console.log(binDec(number) + " dec")
            console.log(binHex(number) + " hex")
            break
        case "bin":
            console.log(hexBin(number) + " bin")
            console.log(hexDec(number) + " dec")
            break

    }

}
console.log(hexDec("8ED3"))
console.log(decHex("36563"))