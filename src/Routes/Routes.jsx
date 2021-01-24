import React from 'react'
import {Route, Switch} from "react-router-dom"
import { About } from '../Pages/About'
import { CardDetail } from '../Pages/CardDetail'
import { Cart } from '../Pages/Cart'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Men } from '../Pages/Men'
import { Women } from '../Pages/Women'
import { PrivateRoute } from './PrivateRoute'
const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <PrivateRoute path="/women" exact>
                 <Women></Women>
                </PrivateRoute>
                <PrivateRoute path="/men" exact>
                 <Men></Men>
                </PrivateRoute>
                <Route path="/login" exact>
                    <Login></Login>
                </Route>
                <PrivateRoute path="/women/:id" exact>
                    <CardDetail></CardDetail>
                </PrivateRoute>
                <PrivateRoute path="/men/:id"  exact>
                    <CardDetail></CardDetail>
                </PrivateRoute>
                <PrivateRoute path="/cart" exact>
                   <Cart></Cart>
                </PrivateRoute>
                <Route path="/about" exact>
                    <About></About>
                </Route>

                <Route>
                    <h5 style={{marginTop:100}}>errer 404 : page not found</h5>
                </Route>
            </Switch>
            
        </div>
    )
}

export {Routes}
