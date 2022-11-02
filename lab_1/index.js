const fs = require('fs')

function lab1() {
    const a = +fs.readFileSync('./a.txt')
    const b = +fs.readFileSync('./b.txt')

    console.log(a + b)
}

lab1()