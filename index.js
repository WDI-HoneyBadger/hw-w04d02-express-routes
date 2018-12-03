// Set up express
var express = require('express');
var app = express();
var port = 3000;

// homepage
app.get('/', function(request, response){
    response.send('This is Mohammed !!!');
});

 // import definitions
    var definitions = require('./definitions');
    
app.get('/:definitions', function(request,response){
 var definitionstName= request.params.definitions;
var definitionsvalue = definitions[definitionstName];

  response.send(`${definitionsvalue} `)
});

// app listen
app.listen(port, function(){
console.log(`App is listening on port ${port}`);
});
