import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import GlobalContext from "@src/assets/common/global-context"
import Login from '@src/containers/login/Login';
import Register from "@src/containers/register/Register";


class App extends React.PureComponent {
    globalContext;

    constructor(props) {
        super(props);
        this.globalContext = {
            name: 666
        };
    }

    render() {
        return (
            <GlobalContext.Provider value={this.globalContext}>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Redirect to='/login'/>
                </Switch>
            </GlobalContext.Provider>
        );
    }
}

export default App;
