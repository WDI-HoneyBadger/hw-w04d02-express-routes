var express= require('express');
var app = express();
var port = 3000;

app.get('/', function (request, response){
    response.send('welcome to the terms dictionary!.');
})


app.listen(port, function(){
    console.log(`App is listening on port ${port}`)
})

var definitions = require('./modules/definitions');


app.get('/definitions/:server', function(request, response){
    var server = request.params.server;
    var definition = definitions[server];

    response.send(`${server} ${definition}`)
})

app.get('/definitions/:module', function(request, response){
    var module = request.params.module;
    var definition = definitions[module];

    response.send(`${module} ${definition}`)
})

app.get('/definitions/:module.exports', function(request, response){
    var moduleExports = request.params.moduleExports;
    var definition = definitions[ moduleExports];

    response.send(`${moduleExports} ${definition}`)
})

app.get('/definitions/:node', function(request, response){
    var node= request.params.node;
    var definition = definitions[node];

    response.send(`${node} ${definition}`)
})

app.get('/definitions/:package', function(request, response){
    var package = request.params.package;
    var definition = definitions[package];

    response.send(`${package} ${definition}`)
})

app.get('/definitions/:npm', function(request, response){
    var npm = request.params.npm;
    var definition = definitions[npm];

    response.send(`${npm} ${definition}`)
})

app.get('/definitions/:package.json', function(request, response){
    var packageJson = request.params.packageJson;
    var definition = definitions[ packageJson];

    response.send(`${packageJson} ${definition}`)
})

app.get('/definitions/:route', function(request, response){
    var route = request.params.route;
    var definition = definitions[route];

    response.send(`${route} ${definition}`)
})

app.get('/definitions/:request', function(request, response){
    var request = request.params.request;
    var definition = definitions[request];

    response.send(`${request} ${definition}`)
})


app.get('/definitions/:response', function(request, response){
    var response= request.params.response;
    var definition = definitions[response];

    response.send(`${response} ${definition}`)
})

app.get('/definitions/:parameter', function(request, response){
    var parameter= request.params.parameter;
    var definition = definitions[rparameter];

    response.send(`${parameter} ${definition}`)
})