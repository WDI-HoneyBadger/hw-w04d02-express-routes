var express = require('express');
var app = express();

var port = 3000;

var definitions = require('./definitions');


app.get('/' ,function(request, response){
    response.send(' Look for the definition you need to know 👩🏻‍🏫');
    });

app.get('/:definition' ,function(request, response){
        console.log(request.params.definition);
        var definition= request.params.definition;
        var defines = definitions[definition];
       response.send(`${defines} `);
       // response.send(`definition of ${definition} is : ${defines} `);
        });
       
  

app.listen(port,function(){
    console.log('app is listining on port ' + port);
})
