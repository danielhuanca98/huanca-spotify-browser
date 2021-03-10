import React from 'react'
import './navigator.sass'
import back from '../../images/back.svg'
import backGreen from '../../images/back-green.svg'
import { useHistory } from 'react-router'

export default function Navigator(props) {

    const history = useHistory()

    const backActive = props.active ? backGreen : back 

    return (
        <div className="navigator-container">
            <div className="icon-container" onClick={() => history.goBack()}>
                <img src={backActive} className="navigator-icon" alt="Voltar"/>
            </div>  
            <div className="icon-container" onClick={() => history.goForward()}>
                <img src={backActive} className="navigator-icon rotate" alt="Avançar"/>
            </div>           
        </div>
    )
}
