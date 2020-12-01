import React, { Component } from 'react'
import Campaign from "./Compain.jsx";
import FillStepper from "./partials/FileStepper.jsx"
import FileStepper from "./partials/FileStepper.jsx";

export default class Home extends Component {

    render () {
        return (
            <div className='Home'>
                <Campaign/>
            </div>
        )
    }
}
