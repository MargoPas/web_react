import React, { Component } from 'react';

import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

import Home from './components/Home.jsx'
import Auth from './components/Auth.jsx'
import SignUp from './components/SignUp.jsx'
import Header from './components/partials/Header.jsx'
import NewCampaign from './components/NewCampaign.jsx'
import Error from './components/Error.jsx'
class App extends Component {
    render() {
        const { history } = this.props


        return (
                <div>
                    <div className = 'Header'> <Header /></div>
                     <div className="App">
                        <Switch>
                            <Route history={history} path='/home' component={Home} />
                            <Route history={history} path='/login' component={Auth} />
                            <Route history={history} path='/signup' component={SignUp} />
                            <Route history={history} path='/newcampaign' component={NewCampaign} />
                            <Route history={history} path='/error' component={Error} />
                            <Redirect from='/' to='/home'/>
                         </Switch>
                     </div>
                </div>
        );
    }
}

export default withRouter(App)
