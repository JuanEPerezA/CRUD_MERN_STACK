const express = require('express');
const app = express();
// const port = process.env.PORT || 5000;

// Importar conexión a MongoDB.
const dbFile = require('./conection')

// Importar rutas y modelos.
const userRoute = require('./routes/users');

// Importar body parser.
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));

app.use('/api/users', userRoute);

app.use('/', (req, res) => {
    res.send('Bienvenidos al backend node')
})

// Configurar server.
app.listen(5000, console.log('Servidor Iniciado Correctamente'));