// Server to run in heroku
var express = require('express');
var app = express();

// Set up static server
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('localhost:3000 or 127.0.0.1:3000');
});