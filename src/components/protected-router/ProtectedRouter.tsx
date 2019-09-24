import * as React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';

export default ({component: Component, ...rest}) => (
    <Route {...rest} render={
        props => (
            localStorage.getItem('token') ? <Component {...props}/> : <Redirect to={{pathname: '/login'}}/>
        )
    }/>
);
