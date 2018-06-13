var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/dok', function (req, res) {
  res.send('Hello DOK');
});

app.listen(3000,"127.0.0.1", function () {
  console.log('http://127.0.0.1:3000/  <= server ON');
});
