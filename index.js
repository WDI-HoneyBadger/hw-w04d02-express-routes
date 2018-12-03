var express = require('express');
var app = express();
var port = 3000;
var def = require('./definitions');

// Home Page
app.get('/', function(request, response){
    response.send('welcome to the terms dictionary!');
    
});

// Words & Definitions
app.get('/definitions', function(request,response){
    var word = request.params.definitions;
    var wordD = definitions[word];
    response.send(`${word} is a ${wordD}}`)
});

app.listen(port, function(){
    console.log(`App is listening on port ${port}`);
})