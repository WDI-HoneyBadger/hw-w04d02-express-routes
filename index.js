var express = require('express');
var app = express();
var port = 3000;
var definitions = require('./definitions');

app.get('/', function(request, response){
    response.send('welcome to the terms dictionary!!')

})

app.get('/:terms', function(request, response){
    var sentence = request.params.terms;
     var defi = definitions[sentence]
     response.send(`${sentence}: ${defi} `);
})







app.listen(port, function(){
    console.log(`"welcome to the terms dictionary!!". ${port}`)
})
