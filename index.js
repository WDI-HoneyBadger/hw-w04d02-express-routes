var express = require("express");
var app = express();
var port = 3000;

var definitions = require("./definitions.js");

app.get("/:id", function(req, res){
    var theKey = req.params.id;
    var theValue = definitions[definitionName];
    res.send(`${theKey}: ${theValue}`);
})


app.listen(port, function(){
    console.log(`listening on port ${port}`);
})