import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './style.css'
export const login = user => {
    return fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
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
            error: "",
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
            this.setState({ redirect: true });
        });
        alert("Имя пользователя " + this.state.username  + "\npassword " +  this.state.password)
    };

    signinForm = (username, password) => (
        <form class="ui-form">
            <h3>Вход в систему</h3>
            <div class="form-row">

                <input
                    onChange={this.handleChange("username")}
                    type="text"
                    className="form-control"
                    value={username}
                /><label>Логин</label>
            </div>
            <div class="form-row">

                <input
                    onChange={this.handleChange("password")}
                    type="password"
                    value={password}
                /><label>Пароль</label>
            </div>

            <input onClick={this.clickSubmit} type="Submit" />

        </form>
    );

    render() {
        const {
            email,
            password,
            redirect
        } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        }

        return (
            <div>

                {this.signinForm(email, password)}
            </div>
        );
    }
}


export default Auth;

