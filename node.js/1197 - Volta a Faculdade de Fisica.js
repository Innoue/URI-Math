let input = require('fs').readFileSync('./1197.txt', 'utf8')
let lines = input.split('\n')

for (let item of lines) {
    item = item.split(" ")
    let v = item[0]
    let t = item[1]

    console.log(v * (t * 2))
}