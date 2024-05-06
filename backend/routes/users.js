const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const schemaUser = new eschema({
    nombres: String,
    apellidos: String,
    correo: String,
    celular: String,
    idUser: String,
})

const UserModel = mongoose.model('usuarios', schemaUser);
module.exports = router;

router.get('/ejemplo', (req, res) => {
    res.end('PRUEBAAAAAAAAAAAAAAAAAAAAAAAAAA')
})

// Agregar Usuarios.
router.post('/addUser', async (req, res) => {
    try {
        const newUser = new UserModel({
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            celular: req.body.celular,
            idUser: req.body.idUser,
        });
        
        await newUser.save();
        res.send('Usuario agregado correctamente');
    } catch (err) {
        res.send(err);
    }
})

// Listar Usuarios.
router.get('/listUsers', (req, res) => {
    UserModel.find({})
    .then(docs => {
        res.send(docs);
    })
    .catch(err => {
        res.send(err);
    });
});

// Listar Data Usuario Específico.
router.post('/dataUserEdit', (req, res) => {
    UserModel.find({idUser:req.body.idUser})
    .then(docs => {
        res.send(docs);
    })
    .catch(err => {
        res.send(err);
    });
});

// Editar Usuarios.
router.post('/editUser', async (req, res) => {
    try {
        const updatedUser = await UserModel.findOneAndUpdate(
            { idUser: req.body.idUser }, // Filtro para encontrar el usuario que se va actualizar
            { 
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                correo: req.body.correo,
                celular: req.body.celular,
                idUser: req.body.idUser
            }, // Datos para actualizar
            { new: true } // Para devolver el documento actualizado
        );

        if (updatedUser) {
            res.send('Usuario modificado correctamente');
        } else {
            res.send('Usuario no encontrado');
        }
    } catch (error) {
        res.send(error);
    }
});

// Eliminar Usuarios.
router.post('/deleteUser', async (req, res) => {
    try {
        const deletedUser = await UserModel.findOneAndDelete(
            { idUser: req.body.idUser },
            { new: true } // Para devolver el documento actualizado
        );

        if (deletedUser) {
            res.send('Usuario modificado correctamente');
        } else {
            res.send('Usuario no encontrado');
        }
    } catch (error) {
        res.send(error);
    }
});