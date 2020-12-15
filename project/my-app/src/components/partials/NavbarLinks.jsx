import React, { Component } from 'react'
import { map } from 'underscore'
import { Link } from "react-router-dom"
const SECTIONS = [
    { title: 'Главная', href: '/home' },
    { title: 'Войти', href: '/login' },
    { title: 'Регистрация', href: '/signup'},
    { title: 'Создать', href: '/newCampaign'},
    { tittle: 'Error', href: '/error'}
]

export default class NavLinks extends Component {

    render() {
        return (
            <div className='nav-links'>
                {map(SECTIONS, ({title, href}) => (
                    <Link className= 'link' to={href}>
                        <span className='Section-Title'>{title}</span>
                    </Link>
                ))}
            </div>
        )
    }
}