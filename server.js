//acceso a la libreria de expres, accediendo a la carpeta node_modules del proyecto que se ha creado cuando se ha instalado express con 
// npm install express --save
const express = require('express');

//con esto creamos una instancia del constructor express con nombre APP
const app = express();



//ya podemos acceder a metodos usados para hacer un servidor incluyendo su nombre despues de app.

//The app.listen method will start up the server locally on the port you give as its first argument 
app.listen(8000,function(){
console.log("server is running");
})
