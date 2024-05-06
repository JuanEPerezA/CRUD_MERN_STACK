const mongoose = require('mongoose');
const { URL_MONGODB } = require('./config.js');

// Database.
mongoose.connect(URL_MONGODB);

const objectdb = mongoose.connection

objectdb.on('connected', () => {
    console.log('Conexión exitosa a MongoDB: '+URL_MONGODB)
})

objectdb.on('error', () => {
    console.log('Error en la conexión a MongoDB: '+URL_MONGODB)
})

module.exports = mongoose