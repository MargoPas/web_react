import React, { Component } from 'react'
import {Redirect} from "react-router-dom";

const signup = user => {
    return fetch(`${process.env.REACT_APP_API_URL}/signup`, {
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

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error:false,
            username:"",
            password:"",
            first:"",
            last:"",
            role:"user",
            open: false,
            redirect:false
        };
    }

    handleChange = name => event => {
        this.setState({ error: false });
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = event => {
        event.preventDefault();
        const { username, password, first, last } = this.state;
        const user = {
            username,
            password,
            first,
            last
        };
        signup(user)
            .then(data => {
                    this.setState({
                        username: username,
                        password: password,
                        first: first,
                        last: last,
                        open: true,
                        redirect: true
                    });


            });
        alert("Имя пользователя " + this.state.first + "\nФамилия пользователя " + this.state.last  + "\nЛогин " + this.state.username + "\npassword " +  this.state.password);
    };

    render () {

        const { username, password, first, last, redirect} = this.state;
        if (redirect) {
            return <Redirect to="/" />;
        }
        return (

            <div>

                <form class="ui-form">
                    <h3> Регистрация</h3>
                    <div class="form-row">
                        <input onChange={this.handleChange("first")}
                               type="text"
                               value={first}/>
                        <label>Имя</label>
                    </div>
                    <div class="form-row">
                        <input onChange={this.handleChange("last")}
                               type="text"
                               value={last}/>
                        <label>Фамилия</label>
                    </div>
                    <div class="form-row">
                        <input onChange={this.handleChange("username")}
                               type="text"
                               value={username}
                        /> <label>Логин</label>
                    </div>
                    <div class="form-row" >
                        <input onChange={this.handleChange("password")}
                               type="password"
                               value={password}
                        /> <label>Пароль</label>
                    </div>
                    <input onClick={this.clickSubmit} type="Submit" />
                </form>
            </div>
        )
    }
}

