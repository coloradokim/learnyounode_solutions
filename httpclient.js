var http = require('http')

http.get(process.argv[2], function(response) {
  response.on('data', function(chunk) {
  result = chunk.toString();
console.log(result);
  })
})
