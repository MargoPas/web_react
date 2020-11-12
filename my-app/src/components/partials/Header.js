import React, { Component } from 'react'
import './menu.css'
export default class Header extends Component {

    render () {
        return (
            <div className='Header'>
               <nav class="top-menu">
                   <ul class="menu-main">
                       <li><a href = 'home'>Главная</a></li>
                       <li><a href='/auth'>Войти</a> </li>
                       <li><a href = 'signup'>Регистрация</a></li>
                   </ul>
               </nav>
            </div>
        )
    }
}