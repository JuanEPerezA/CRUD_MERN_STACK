import React from 'react';
import { BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import UsersList from '../pages/UsersList';
import EditUsers from '../pages/EditUsers';
import AddUsers from '../pages/AddUsers';

const Routes = ({idioma, setIdioma}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' element={<UsersList/>}/>
        <Route exact path="/Usuarios" element={<UsersList/>}/>
        <Route exact path="/EditarUsuarios/:userId" element={<EditUsers/>}/>
        <Route exact path="/CrearUsuarios" element={<AddUsers/>}/>
        <Route path="*" element={<UsersList/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;