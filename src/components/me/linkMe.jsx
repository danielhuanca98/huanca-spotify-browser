import React, { useEffect } from 'react'
import './linkMe.sass'

export default function LinkMe() {   
    
    
    useEffect(() => {
        const blinkEl = document.getElementById('blink')
        console.log(blinkEl)
        const interval = setInterval(() => {
            if (blinkEl.classList.contains('in')) {
                blinkEl.classList.remove('in')
                blinkEl.classList.add('out')
            } else {
                blinkEl.classList.remove('out')
                blinkEl.classList.add('in')
            }        
        }, 500)
        return () => clearInterval(interval)
    }, [])


    return (
            <a className="me-container" rel="noreferrer" target="_blank" href='https://github.com/danielhuanca98/huanca-spotify-browser'>
                <p className="me-dev">/dev</p>
                <div className="hid">
                    <p className="me-about">/About this </p>
                    <p className="me-project">project</p>
                    <p id="blink">|</p>
                </div>                
            </a>
    )
}
