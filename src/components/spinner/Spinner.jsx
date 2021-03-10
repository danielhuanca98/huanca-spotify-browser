import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import './spinner.sass'

export default function Spinner() {
    return (
        <div className="spinner">
            <ClipLoader color='#1db954' size={150}/>
        </div>
    )
}
