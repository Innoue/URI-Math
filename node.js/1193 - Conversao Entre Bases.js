function decBin(number){
    number = parseInt(number)
    let result = ""
    while(number >= 2){
        // console.log("Before = number: " + number + " - result: " + result)
        result = (number % 2).toString() + result
        number = Math.trunc(number/2)
        // console.log("After = number: " + number + " - result: " + result + "\n")
    }   
    return number.toString() + result 
}

function decHex(number){
    number = parseInt(number)
    let result = ""
    while(number >= 16){
        // console.log("Before = number: " + number + " - result: " + result)
        result = tableDecHex((number % 16).toString()) + result
        number = Math.trunc(number/16)
        // console.log("After = number: " + number + " - result: " + result + "\n")
    }   
    result = number.toString() + result 
    return result
}

function hexDec(number){
    number = number.toString().split("")
    let result  = 0
    let numberLength = number.length - 1
    for(i of number){
        i = parseInt(tableHexDec(i))
        result += i * Math.pow(16, numberLength)
        numberLength--
    }

    return result

}

function tableDecHex(number){
    nnumber = number.toString()
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

function tableHexDec(number){
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
console.log(hexDec("8ED3"))
console.log(decHex("36563"))