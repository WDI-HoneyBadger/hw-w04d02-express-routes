var express = require('express');
var app = express();
var port = 3000;

app.listen(port , function(){
    console.log(`App is listeing on port ${port}`)
})

app.get('/', function (request,response){
    response.send('This is the defenetions of NPM terms');
})

var definitions = require('./modules/definitions');
app.get ('/:definition', function(request, response){
var definitionName = request.params.definition;
var definition = definitions[definitionName];
response.send (`The definition of ${definitionName} is ${definition}`);
})
