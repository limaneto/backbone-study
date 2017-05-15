var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Movie Catalog Application')
})

app.listen(8080, function () {
  console.log('Listening on por 8080')
})

/**
 * Serving the project folder since accessing local html file
 * throws error using template injection
 */
app.use(express.static('.'))
