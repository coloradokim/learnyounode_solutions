var http = require('http')

http.get(process.argv[2], function(response) {
  var result = ''
  response.on('data', function(chunk) {
    result += chunk.toString()
  })
  response.on('end', function() {
      console.log(result.length);
      console.log(result)
  })
})
