import React, { Component } from 'react'
import Campaign from "./Compain.jsx";
import FillStepper from "./partials/FileStepper.jsx"
import FileStepper from "./partials/FileStepper.jsx";
import {RedBox, CenterContainer} from '../styles/Error'

import quest from '../images/ques2.png'


export default class Error extends Component {

    render () {
        return (
            <CenterContainer>
                <RedBox>
                    <div className='image'>
                        <p><img src={quest} width="160" height="220" alt="error"/></p>
                    </div>
                    <div className='text'>
                        <div className='SmallTextBox'>
                        Нам очень стыдно...
                        </div>
                        <div className='BigTextBox'>
                        Мы не смогли найти страницу, которую вы искали.
                        </div>
                        <div className='VerySmallTextBox'>
                        Вернуться на <a href = '/home'>главную страницу.</a>
                        </div>
                    </div>
                </RedBox>
            </CenterContainer>
        )
    }
}
