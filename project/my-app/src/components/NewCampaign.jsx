import React, { Component } from 'react'
import HorizontalStepper from '../components/partials/Dialog.jsx'
import {Redirect} from "react-router-dom";
import {Check} from "@material-ui/icons";
import {checking} from "./Compain.jsx";



export default class NewCampaign extends Component {
    constructor(props) {

        super(props);
        this.state = {
            redirect: false,
            user: false,
            mounted:false
        }
    }

    componentDidMount(){
        checking().then(data => {
            if (data.status === 'not user') {
                this.setState({user: false, mounted: true})
            } else {
                this.setState({user: true,  mounted: true})
            }
    })
    }



        // alert("Имя пользователя' " + this.state.username  + "\npassword " +  this.state.password)

    render () {
                const {user, redirect, mounted} = this.state


           if(redirect) {
                return <Redirect to='/'/>
            }

        return (
            <div>
            {mounted &&
            <div align = 'center'>
                {user && <HorizontalStepper />}
                {!user && <Redirect to= 'login'/>}
            </div>}
            </div>
        )
    }
}
