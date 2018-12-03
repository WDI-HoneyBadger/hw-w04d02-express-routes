var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response){
    response.send('Welcome to the terms dictionary!!');
})

app.listen(port, function(){
console.log(`App is listeing in port ${port}`)

})

//import definitions
var definitions = require('./module/definitions')

app.get('/:definition', function(request, response){
    var definitionList = request.params.definition;
    var definition = definitions[definitionList];
    response.send(`${definitionList} is a ${definition}`)
})