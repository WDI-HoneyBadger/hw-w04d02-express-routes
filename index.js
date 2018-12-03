var definitions = require('./module/definitions');

var express = require('express');

var app = express();

var port = 3000;

app.listen(port, function () {

    console.log("The server is listening....");

})

app.get('/', function (request, respose) {

    respose.send("welcome to the terms dictionary!!");


})

//Route
app.get('/:definition', function (request, Response) {

    var definitionWords = request.params.definition;

    var definition = definitions[definitionWords];

    Response.send(` The ${definitionWords} is ${definition}`);

})
