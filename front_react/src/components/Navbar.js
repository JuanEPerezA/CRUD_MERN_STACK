import React from 'react';

const Navbar = () => {
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
            <a className="navbar-brand" href="/">CRUD MERN STACK</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Usuarios">Listar Usuarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/CrearUsuarios">Crear Usuarios</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/EditarUsuarios">Editar Usuarios</a>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
   );
}
 
export default Navbar;