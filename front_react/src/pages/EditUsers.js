import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = () => {
    // Hooks.
    const params = useParams();

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    const redir = useNavigate();

    useEffect(() => {
        axios.post('/api/users/dataUserEdit', {idUser: params.userId})
        .then(res => {
            console.log(res.data);
            const userInfo = res.data[0];
            setName(userInfo.nombres);
            setLastname(userInfo.apellidos);
            setMail(userInfo.correo);
            setPhone(userInfo.celular);
        })
        .catch(err => {
            console.log('Algo ha fallado :( ' + err);
        });
    }, [])

    function editarUsuario() {
        var userData = {
            nombres : name,
            apellidos: lastname,
            correo: mail,
            celular: phone,
            idUser: params.userId
        }

        axios.post('/api/users/editUser', userData)
        .then(res => {
            alert(res.data);
            redir('/');
        })
        .catch(err => {
            alert('Algo ha fallado :( ' + err);
        });
    }

    return(
        <div className='container'>
            <h2>Editar Usuarios</h2>
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
                    
                    <button onClick={editarUsuario} className='btn btn-success'>Editar Usuario</button>

                </div>
            </div>
        </div>
    )
}

export default EditUsers;