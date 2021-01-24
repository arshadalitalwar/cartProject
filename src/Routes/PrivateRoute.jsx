import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvide';


const PrivateRoute = ({ children, path }) => {
    const { isAuth } = React.useContext(AuthContext);
    
    return isAuth ?  (
        <Route path={path}>{children}</Route>
            
        
    ) : (
            <Redirect to="/login"></Redirect>
    )
}

export {PrivateRoute}
