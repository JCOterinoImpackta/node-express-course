//acceso a la libreria de expres, accediendo a la carpeta node_modules del proyecto que se ha creado cuando se ha instalado express con 
// npm install express --save
const express = require('express');

//con esto creamos una instancia del constructor express con nombre APP
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]
    app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })


    app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})


app.post('/login',function(req,res){
     const username=req.body.username;
     const password=req.body.password;

     const mockUsername="billyTheKid";
     const mockPassword="superSecret";

     if (username===mockUsername && password===mockPassword){
          res.json({
                success: true,
                message: 'password and username match!',
                token: 'encrypted token goes here'
          })
     } else {
          res.json({
                success: false,
                message: 'password and username do not match'
          })
     }
})


//ya podemos acceder a metodos usados para hacer un servidor incluyendo su nombre despues de app.

//The app.listen method will start up the server locally on the port you give as its first argument 
app.listen(8000,function(){console.log("server is running");})

