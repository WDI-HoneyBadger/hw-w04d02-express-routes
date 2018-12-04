var express = require('express');
var app = express();
var port =3000;
var definitions = require('./module/definitions');//

  app.listen(port , function(){
  console.log(`app is listening on port ${port}`)
   });

app.get('/' , function (requset , response ){ 
    response.send('welcome to the terms dictionary!!');
})

app.get('/:id' , function(request, response){
    var userSelction = request.params.id;
    var definition = definitions[userSelction];
    response.send(` ${userSelction} : ${definition} `);
})
