var express = require('express');

var app = express();

var port = 3000;

var definitions = require('./definitions');

app.get('/', function(request, response){
    response.send('welcome to definitions home page')
})


app.get('/:id', function(request, response){
    var definitionsName = request.params.id;
     var theDefinitions = definitions[definitionsName]
     response.send(`${theDefinitions}`);
})


app.listen(port, function(){
    console.log(`app is listininng ${port}`)
})