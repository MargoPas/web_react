import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Input, Container} from "../styles/Input.js";
import {Button} from "../styles/button";
import HorizontalLinearStepper from '../components/partials/Dialog.jsx'
export const login = user => {
    return fetch(`/api/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: false,
            redirect:false
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;
        const user = {
            username,
            password
        };

        login(user).then(data => {
            if(data.status == 'ok') {
                this.setState({redirect: true});
            }
             else{
            this.setState({error: true})
        }
        });
       // alert("Имя пользователя' " + this.state.username  + "\npassword " +  this.state.password)
    };

    signinForm = (username, password) => (
        <Container>
            <form className="ui-form">
            <h3>Вход в систему</h3>
            <div className="form-row">

                <Input
                    onChange={this.handleChange("username")}
                    type="text"
                    className="form-control"
                    value={username}
                /><label>Логин</label>
            </div>
            <div className="form-row">

                <Input
                    onChange={this.handleChange("password")}
                    type="password"
                    value={password}
                /><label>Пароль</label>
            </div>

            <Button onClick={this.clickSubmit} type="Submit" >Войти</Button>

        </form>
        </Container>
    );

    render() {
        const {
            email,
            password,
            error,
            redirect
        } = this.state;

        if (error) {
            return <Redirect to="/error" />;
        }
        else{
            if(redirect) {
                return <Redirect to='/'/>
            }

        }
        return (
            <div>

                {this.signinForm(email, password)}
            </div>
        );
    }
}


export default Auth;

