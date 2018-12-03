var express = require('express');
var app = express(); 
var port = 3000;
var definitions = require('./terms-dictionary/definitions')

app.get('/',function(request,response){
    response.send(`Welcome to the terms dictionary`)
})

app.get('/server',function(request,response){
    response.send(definitions.server)
})

app.get('/module',function(request,response){
   response.send(definitions.module)
})

app.get('/module.exports',function(request,response){
    response.send(definitions["module.exports"])
})

app.get('/node',function(request,response){
    response.send(definitions.node)
})

app.get('/package',function(request,response){
    response.send(definitions.package)
})

app.get('/npm',function(request,response){
    response.send(definitions.npm)
})

app.get('/package.json',function(request,response){
    response.send(definitions["package.json"])
})

app.get('/route',function(request,response){
    response.send(definitions.route)
})

app.get('/request',function(request,response){
    response.send(definitions.request)
})

app.get('/response',function(request,response){
    response.send(definitions.response)
})

app.get('/parameter',function(request,response){
    response.send(definitions.parameter)
})

app.listen(port,function(){
    console.log(`App listen at port ${port}`)
})
console.log(app)

