import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';

const AddUsers = () => {
    // Hooks.
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    function registrarUsuario() {
        var userData = {
            nombres : name,
            apellidos: lastname,
            correo: mail,
            celular: phone,
            idUser: uniqid()
        }

        axios.post('/api/users/addUser', userData)
        .then(res => {
            alert(res.data);
        })
        .catch(err => {
            alert('Algo ha fallado :( ' + err);
        });
    }

    return(
        <div className='container'>
            <h2>Inserción de Usuarios</h2>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <section className='mb-3'>
                        <label htmlFor='txtName' className='form-label'>Nombres</label>
                        <input type='text' id='txtName' className='form-control' value={name} onChange={(e) => {setName(e.target.value)}}/>
                    </section>
                    <section className='mb-3'>
                        <label htmlFor='txtLastName' className='form-label'>Apellidos</label>
                        <input type='text' id='txtLastName' className='form-control' value={lastname} onChange={(e) => {setLastname(e.target.value)}}/>
                    </section>
                    <section className='mb-3'>
                        <label htmlFor='txtMail' className='form-label'>Correo</label>
                        <input type='email' id='txtMail' className='form-control' value={mail} onChange={(e) => {setMail(e.target.value)}}/>
                    </section>
                    <section className='mb-3'>
                        <label htmlFor='txtPhone' className='form-label'>Teléfono</label>
                        <input type='number' id='txtPhone' className='form-control' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                    </section>
                    
                    <button onClick={registrarUsuario} className='btn btn-success'>Registrar Usuario</button>

                </div>
            </div>
        </div>
    )
}

export default AddUsers;