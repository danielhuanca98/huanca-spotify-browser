import React from 'react'
import logo from "../../images/logo-green.png";
import './header.sass'
import LinkMe from '../me/linkMe'

export default function Header(props) {


    return (
        <div className="header">
            <img className="main-logo" alt="spotify" src={logo} />
            <LinkMe />
        </div>
    )
}
