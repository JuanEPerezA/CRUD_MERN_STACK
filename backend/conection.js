const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objectdb = mongoose.connection

objectdb.on('connected', () => {
    console.log('Conexión exitosa a MongoDB')
})

objectdb.on('error', () => {
    console.log('Error en la conexión a MongoDB')
})

module.exports = mongoose