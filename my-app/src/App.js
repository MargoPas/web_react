import React, { Component } from 'react';

import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

import Home from './components/Home'
import Auth from './components/Auth'
import SignUp from './components/SignUp'
import Header from './components/partials/Header'

class App extends Component {
    render() {
        const { history } = this.props


        return (
            <div>
                <div class Name = 'Header'> <Header /></div>
                 <div class Name="App">
                    <Switch>
                        <Route history={history} path='/home' component={Home} />
                        <Route history={history} path='/auth' component={Auth} />
                        <Route history={history} path='/signup' component={SignUp} />
                        <Redirect from='/' to='/home'/>
                     </Switch>
                 </div>
            </div>
        );
    }
}

export default withRouter(App)
