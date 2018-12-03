var express = require('express');
var app = express();
var port = 3001;
var definitions = require('./definitions')

app.get("/", function(request,response){
    response.send("welcome");

})



app.listen(port, function(){
    console.log(`app is listening in port ${port}`);
})
app.get('/:definition', function(request,response){

    var id =request.params.definition;
    var location= definitions[id];
    response.send(`${id} and ${location}`);
})