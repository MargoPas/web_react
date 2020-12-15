import React, { Component } from 'react'
import {Redirect} from "react-router-dom";
//import {Button} from "../styles/button"
import {Input, Container} from "../styles/Input"
import styled from 'styled-components';
import {Button} from "../styles/button";


const signUp = user => {
    return fetch(`/api/signup`, {
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
            message:'',
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
        const { error, username, password, first, last, redirect} = this.state;
        const user = {
            error,
            username,
            password,
            first,
            last,
            redirect
        };
        signUp(user)
            .then(data => {
                //alert(data.status)
                if(data !== undefined) {
                    if (data.flash !== undefined) {
                        if (data.flash.length == 0) {
                            this.setState({
                                username: username,
                                password: password,
                                first: first,
                                last: last,
                                open: true,
                                redirect: true,
                                error: false

                            });
                        }

                    } else {
                        this.setState({message: data.data[0]})
                        alert( this.state.message)
                    }
                }
            });
        //alert("Имя пользователя " + this.state.first + "\nФамилия пользователя " + this.state.last  + "\nЛогин " + this.state.username + "\npassword " +  this.state.password);
    };
    signupForm = (first, last, username, password) => (
        <div>

            <form className="ui-form">
                <h3> Регистрация</h3>
                <div className="form-row">

                    <Input onChange={this.handleChange("first")}
                           type="text"
                           value={first}/><label>Имя</label><br/>

                </div>
                <div className="form-row">

                    <Input onChange={this.handleChange("last")}
                           type="text" устанвк
                           value={last}/><label>Фамилия</label><br/>

                </div>
                <div className="form-row">

                    <Input onChange={this.handleChange("username")}
                           type="text"
                           value={username}
                    /><label>Логин</label><br/>
                </div>
                <div className="form-row">

                    <Input onChange={this.handleChange("password")}
                           type="password"
                           value={password}
                    /><label>Пароль</label><br/>
                </div>
                <Button onClick={this.clickSubmit} type="Submit" >Зарегистрироваться</Button>
            </form>
        </div>
    )
    render () {

        const {
            error,
            username,
            password,
            first,
            last,
            redirect} = this.state;

        if (error) {
            return <Redirect to="/error" />;
        }
        else {
            if (redirect) {
                return <Redirect to='/home'/>
            }
        }
        return (

            <Container>
                {this.signupForm(first, last, username, password)}
            </Container>


        )
    }
}

