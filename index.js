var express = require('express');
var app = express();
var port = 3000;
var definitions = require(`./definitions`);

app.get('/:definition', function(request, response){
   var definition = request.params.definition;
   console.log(definition);
   var words = definitions[definition];
   response.send(`${definition} = ${words}`);

})

app.get('/', function(request, response){
    response.send("welcome to the terms dictionary!!");
})

app.listen(port, function(){
    console.log(`App is listening on port ${port}`)
})