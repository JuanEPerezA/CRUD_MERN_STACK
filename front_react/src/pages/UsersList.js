import React, { useEffect, useState } from 'react';
import UserData from './UserData';
import axios from 'axios';

const UsersList = () => {
    // Hooks.
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('/api/users/listUsers')
        .then(res => {
            console.log(res.data);
            setUserData(res.data);
        })
        .catch(err => {
            console.log('Algo ha fallado :( ' + err);
        });
    }, [])

    // Mapear listado de usuarios.
    const userList = userData.map(user => {
        return(
            <>
                <UserData user={user}/>
            </>
        )       
    })


    return(
        <div>
            <h2>Listado de Usuarios</h2>
            <div className='container'>
                <div className='row'>
                    {userList}
                </div>
            </div>
        </div>
    )
}

export default UsersList;