import React, { Component } from 'react'
import {Campaign, checking} from "./Compain.jsx";
import {Redirect} from "react-router-dom"
import RichTextEditor from "./Drafts";

import DraftContainer from "../styles/DraftContainer";
import {BuildTwoTone} from "@material-ui/icons";
import {Button} from "../styles/button";

export const checkAdmin = () => {
    return fetch(`/api/deleteCampaign`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const logout = () => {
    return fetch(`/api/logout`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const GetUserId = () => {
    return fetch(`/api/user_id`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            user: false,
            id: 0,
            redirect:false,
            admin:false
        }
    }
    componentDidMount() {
        checking().then(data => {
            if (data.status === 'not user') {
                this.setState({user: false})
            } else {
                this.setState({user: true})
                checkAdmin().then(data => {
                    if (data.status == 'admin'){
                        this.setState({admin :true, user:false})
                    }
                    else{
                        GetUserId().then(data => {
                            if (data.status == 'ok') {
                                this.setState({id: data.data})
                            }
                            console.log(this.state.id)
                        })
                    }
                })


            }
        })
    }
    clickLogout = () =>{
        logout().then(data =>{
            if(data.status != undefined) {
                if (data.status !== 'logout') {
                    alert('не получилось выйти из вашего аккаунта')
                }
                else{
                    this.setState({user:false, admin:false})
                }
            }
        })
    }

    clickRedirect = () => {
        this.setState({redirect:true})

}
    render () {
        const {user, redirect, admin} = this.state
            if (redirect){
                return <Redirect to='/myCampaigns'/>
            }
        return (
            <div className='Home'>
                <Campaign user = {this.state.user} id = {this.state.id} admin = {this.state.admin}/>
                {user && <Button align='center' onClick={this.clickLogout} >Выйти</Button>}
                {admin && <Button align='center' onClick={this.clickLogout} >Выйти</Button>}
                {user && <Button align='center' onClick={this.clickRedirect} >Мои Кампании</Button>}
            </div>
        )
    }
}
