var express =require('express');
var app = express();
var port =3000;
var defi =require('./definitions');
app.listen(port,function(){
console.log(`this port is ${port}`)

});
app.get('/',function(request,response){

response.send('welcome to the terms dictionary!!')

});

app.get('/server',function(request,response){
   
    response.send("a server is a computer that serves websites or data to a 'client' (see localhost:3 0/client for the definition!).");

});
app.get('/module',function(request,response){

response.send("a module is a javascript file in node.  Modules allow us to make a single javascript app that has many javascript files!"); 
});
app.get('/module.exports',function(request,response){
    response.send("module.exports is the part of a node module used for exporting data.  Any data in the module.exports will then be accessible from other javascript files!")
});
app.get('/node',function(request,response){

response.send("Node is a javascript runtime environment.  It lets us run javascript without a browser.")
});
app.get('/package',function(request,response){

response.send("A package is like a library.  A piece of code written by other people that can be used inside our app.")
});
app.get('/npm',function(request,response){

response.send("npm stands for 'Node Package Manager'.  NPM is a place where 'packages' are hosted.  You can install code from here to be used in your own application!")
});
app.get('/package.json',function(request,response){

response.send("Package.json is a file that contains data about our application.  It includes a lot of things like the name of our app, a description, the version number, etc.  It also includes information about what packages we are using in our app.  We create the package.json file automatically when we run 'npm init'")
});
app.get('/route',function(request,response){

response.send("Routes are urls.  A user can make a request to a route (like /cats or /greetings or /greetings/ali) to get data.  When the request is sent to a server, the server looks at the route to decide what information should be returned to the user.")
});

app.get('/request',function(request,response){
response.send("requests are objects sent by users to 'request' information.  The request object contains a lot of information, including routes, parameters and other things that tell us what data the user wants.")
});
app.get('/response',function(request,response){
response.send("responses are the objects built by the server to be sent back to the user.")
 });

app.get('/parameter',function(request,response){
response.send("parameters are part of the route.  Users can   send parameters to request a specific part of the data provided by a server.  For example `/greetings/trevor`")  
});
