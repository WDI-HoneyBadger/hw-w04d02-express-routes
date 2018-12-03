var express = require('express');
var express = express();
var port = 3000;


app.listen(port, function(){
    console.log(`App is listening on port ${port}`);
})

var definitions = require('./definitions');

app.get('/', function(request, response){
    response.send('Welcome To The Terms Dictionary!!');
})

var term = request.params.definitions;
var definition = definitions[definition]

app.get('/:definitions', function(request, response){
    response.send(`the definition of ${term} is ${definition}`);
}) 