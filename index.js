var express = require('express');
var app = express();
var port = 3000;
var definition = require('./definititons/definitions');
 app.get('/', function(request, response){
    response.send('welcome to the terms dictionary!!')
}) 
app.get('/:definition', function(request, response){
    var definitions = request.params.definition;
    var termDeifintion = definition[definitions];
    response.send(`${definitions} is ${termDeifintion}`);
}) 
 app.listen(port, function(){
    console.log('welcome to the terms dictionary!!')
}) 