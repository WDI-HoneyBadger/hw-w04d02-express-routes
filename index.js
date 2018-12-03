var express = require('express');
var app = express();
var port = 3000;
var definitions = require('./definitions');

app.get('/', function(request, response){
    response.send('welcome to the terms dictionary!!');
})

app.get('/:word', function(request, response){
    var word = request.params.word;
    var definition = definitions[word];
    response.send(`${word} is ${definition}`);
})



app.listen(port, function(){
    console.log(`App is listening on port ${port}`);
})