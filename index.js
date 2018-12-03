var express = require(`express`);
var app = express();
var port = 3000;


app.get('/', function (request, response) {
    response.send("welcome to the terms dictionary!!");
})

app.listen(port, function () {
    console.log(`app is listing on port ${port}`);
})

var definitions = require(`./modules/definitions`)

app.get('definitions/:server',function (request, response){
    var server = request.params.server;
    var definitions = definitions[server];
    response.send(`${server}is a ${definitions} `)
})
