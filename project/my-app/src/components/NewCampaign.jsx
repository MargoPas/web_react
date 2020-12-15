import React, { Component } from 'react'
import HorizontalStepper from '../components/partials/Dialog.jsx'
import {Redirect} from "react-router-dom";
import {Check} from "@material-ui/icons";



export default class NewCampaign extends Component {
    constructor(props) {

        super(props);
        this.state = {
            redirect: false
        }
    }




        // alert("Имя пользователя' " + this.state.username  + "\npassword " +  this.state.password)

    render () {
        const {
            redirect
        } = this.state;
           if(redirect) {
                return <Redirect to='/'/>
            }

        return (

            <div align = 'center'>
                <HorizontalStepper />
            </div>
        )
    }
}
