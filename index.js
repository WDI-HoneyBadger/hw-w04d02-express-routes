var express = require('express');
var app = express();
var port = 3000;

var definitions = require('./definitions')

app.get('/:definition', function(request, response){
    var definition = request.params.definition;
    var getDefinition = definitions[definition];
    response.send(`${definition} is: ${getDefinition}`);
});

app.listen(port, function(){
    console.log(`${port} in run`);
});