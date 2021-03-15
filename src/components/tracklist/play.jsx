import React, { useContext, useEffect, useState } from 'react'
import { track } from '../../api/request'
import { TokenContext } from '../../TokenProvider'
import playGray from '../../images/play.svg'
import playGreen from '../../images/play2.svg'
import pause from '../../images/pause.svg'


export default function Play(props) {

    const [audio, setAudio] = useState('')
    const [isPlaying, setIsPlaying] = useState(false)
    const token = useContext(TokenContext)

    let icon = playGray

    if (audio !== '') {
        icon = playGreen
    } 
    if (isPlaying) {
        icon = pause
    }

    const toggle = () => {
        if (audio === '') return
        if (isPlaying === false) {
            audio.play()           
            setIsPlaying(true)
            var interval
            setTimeout(() => {
                interval = setInterval(() => {
                    if (audio.volume < 0.5) {
                        audio.volume += 0.01
                    } else clearInterval(interval)                
                }, 30)
            }, 200)                      
            
        } else {
            audio.pause()
            clearInterval(interval)
            setIsPlaying(false)
        }
    }

    useEffect(() => {
        track(props.id, token).then(res => {

            if (res.data.preview_url === null) return
            let audio = new Audio(res.data.preview_url)
            audio.volume = 0 
            setAudio(audio)
        })
    }, [props, token])

    return (
        <div className="play" onClick={() => toggle()}>
            <img width="20px" src={icon} alt="Tocar"/>
        </div>
    )
}
