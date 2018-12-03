var express = require('express');
var app = express();
var port = 3000;
var definitions = require('./definitions');

app.get('/', function(request, response){
    response.send('Welcome to the terms dictionary!!');
});

app.get('/:definition', function(request, response){
    var word = request.params.definition;
    var wordDefinition = definitions[word];
    response.send(wordDefinition);
})

app.listen(port, function(){
    console.log(`App running in port: ${port}`);
});