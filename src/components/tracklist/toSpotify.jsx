import React from 'react'
import icon from '../../images/icon-white.png'
import './toSpotify.sass'

export default function ToSpotify(props) {

    return (
        <a rel="noreferrer" target="_blank" className='buttonclassName' href={props.url}>
            <img className='imgclassName' src={icon} alt="Open spotify"/>
            <label className='labelStyle'>OPEN SPOTIFY</label>
        </a>
    )
}
