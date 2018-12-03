// set up express
var express = require('express'); // taking express from the package 
var app = express();
var port = 3000;

// create a route for the homepage

app.get('/', function(request, response){
    response.send("welcome to the terms dictionary!!");
})


// make ur app listen 
app.listen(port, function(){
    console.log(`App is listening on port ${port}`)
}) 

//import terms defintions 

var definitions = require('./definitions')

// create a route for server 

app.get('/definitions', function(request, response){
    var term = request.params.term;
    var definition = definitions[term]; 

    // var definition = definition.server


   
    response.send(` ${term} is : ${definition}`);
    })
    



    


// app.get('/defintions/:server', function(request, response){
//     // response.send("welcome to the terms dictionary!!");
//     // response.send(`Hello ${request.params.name}!!!`);
//     // var term = request.params.term;
//     // var definition = definitions[definition]; 
//     // response.send(`a ${term} is ${definition}.`);
// })
