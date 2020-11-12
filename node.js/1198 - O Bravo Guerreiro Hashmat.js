let input = require('fs').readFileSync('./1198.txt', 'utf8')
let lines = input.split('\n')

for (let item of lines) {
    item = item.split(" ")
    let ally = item[0]
    let enemy = item[1]

    console.log(enemy - ally)
}