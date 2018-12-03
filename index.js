var express = require('express');
var app = express();
var port =3000;
var definitions = require('./definitions')


 app.get('/:define', function(request, response){
    var word = request.params.define;
    var definee = definitions[word]
response.send(`${word} meaning ${definee}`)
 })

app.get('/', function(request, response){
    response.send("welcome to the terms dictionary!!")
});




app.listen(port, function(){
    console.log(`App is listening on port ${port}`)
});