const express = require('express')
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app = express();

//Esto crea la base de datos
require('./db');

//Ahora uso body-parser para las peticiones post (poder mandar objetos por esas peticiones)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.get('/', (req, res) => {
//    res.send('Hola mundo');
//});

//todas las peticiones que entren al servidor con /api las mando a apiRouter
app.use('/api', apiRouter);


app.listen(3001,() =>{
    console.log('Servidor arrancado')
});


