var definitions = require('./definitions');
var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response){
    response.send(`welcome to the terms dictionary!!".`);
})
app.get('/:keyword', function(request, response){
var keyword = request.params.keyword;
var definition = definitions[keyword]; 
response.send(`The definition of ${keyword} is : ${definition}`);
})

app.listen(port, function(){
    console.log(`The server is listening on port ${port}`);
})