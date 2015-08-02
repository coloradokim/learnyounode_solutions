console.log(process.argv);


var toRead = fs.readFileSync(process.argv[2])

var solution = toRead.toString().split('\n').length-1;

console.log(solution);
