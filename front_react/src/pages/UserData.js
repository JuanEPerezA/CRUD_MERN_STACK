import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserData = ({user}) => {
    const redir = useNavigate();
    function borrarUsuario(idUser) {
        axios.post('/api/users/deleteUser', {idUser: idUser})
        .then(res => {
            alert(res.data);
            redir(0);
        })
        .catch(err => {
            alert('Algo ha fallado :( ' + err);
        });
    }

    return(
        <div className='col-sm-4'>
            <ul className='list-group'>
                <li className='list-group-item'>{user.idUser}</li>
                <li className='list-group-item'>{user.nombres}</li>
                <li className='list-group-item'>{user.apellidos}</li>
                <li className='list-group-item'>{user.correo}</li>
                <li className='list-group-item'>{user.celular}</li>
            </ul>
            <section className='btn-group' role='group'>
                <Link to={`/EditarUsuarios/${user.idUser}`}><li className='btn btn-primary'>Editar</li></Link>
                <button className='btn btn-danger' onClick={() => {borrarUsuario(user.idUser)}}>Eliminar</button>
            </section>
            <hr className='mt-4'></hr>
        </div>
    )
}

export default UserData;