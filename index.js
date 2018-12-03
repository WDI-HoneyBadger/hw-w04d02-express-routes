var express = require('express');
var app = express();
var port = 3000;

var definitions = require('./definitions');

app.get('/' ,function(request, response) {

    response.send(`Welcome to the definition website!!!`);
})

app.get('/:definition' ,function(request, response) {

    var defName = request.params.definition;
    var defObject = definitions[defName];

    response.send(`${defObject}`);
})




app.listen(port, function(){

    console.log(`App is listening on port ${port}`);
})