var fs = require('fs')
var readThis = fs.readFileSync(process.argv[2])
var answer = readThis.toString().split('\n').length-1

console.log(answer);
