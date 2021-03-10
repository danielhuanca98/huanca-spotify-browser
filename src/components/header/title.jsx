import React from 'react'
import './title.sass'

export default function Title(props) {
    return (
        <div className="components-title">
            <p className="title">{props.title}</p>
            {props.name && <p className="name">{props.name}</p>}
        </div>
    )
}
