var express = require('express');
var app = express();
var port = 3000;
var definitions = require('./definitions');

app.get('/', function(request, response){
    response.send('welcome to the terms dictionary!!');
});

app.get('/:definition', function(request, response){
    var keyWord = request.params.definition;
    var definitionKeyword = definitions[keyWord];
    response.send(`${keyWord} : ${definitionKeyword}`);

});

app.listen(port, function(){
    console.log(`App is listening on port ${port}`);
});