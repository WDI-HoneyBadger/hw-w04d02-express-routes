
var express = require('express');
var app = express();
var port = 3000;


var definitions = require('./module/definitions')

app.get('/:definition',function(request , response){
var wordDef = request.params.definition;
 var definition = definitions[definition]
response.send(`${wordDef}:${definition}`);
})




app.listen(port,function(){
  console.log(`app is listening on ${port}`)
})