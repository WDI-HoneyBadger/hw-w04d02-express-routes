var express = require('express');
var app = express();
var port = 3000;

var definitions =require('./module/definitions');

app.listen(port , function(){
    console.log(`my definitions is listen to port ${port}`);
})

app.get('/' , function(requset , respones){
    respones.send("It's definitions home page");
})
app.get('/definitions/:definition' , function( requset , respones) {
var definition = requset.params.definition ;
var myDefinition = definitions[definition];
respones.send(` ${definition}  is ${myDefinition } `);

})