var express = require('express');
var app = express();
var port=3000;

var definitions0 = require('./definition/definitions');

app.get('/', function(request, response){

    response.send('welcome to the terms dictionary!!');

})

 
app.get('/:definitions',function(request, response){
    var definitions= request.params.definitions;
    var mmDefinition = definitions0[definitions];
    response.send(`${definitions} is ${mmDefinition}`)



})
app.listen(port, function(){
    console.log('welcome to the terms dictionary!!');
}) 
