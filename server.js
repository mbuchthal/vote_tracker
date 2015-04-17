
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/greet/:person', function(request, response) {
  response.status(200).send('<h1>Hello Stranger!</h1>');
});

app.get('/secret', function(request, response) {
  response.status(200).send('<h1>In Sixth Sense, Bruce Willis is already dead.</h1>');
});

app.get('/*', function(request, response) {
  response.status(404).send('Could Not Find Page - Error 404');
});

// app.use(function(request, response) {
//   response.status(404.sendFile(__direname + '/public/404.html'));
// })

app.listen(process.env.PORT || 5000, function() {
  console.log('server running');
});
