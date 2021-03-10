import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { playLists } from '../../api/request'
import Title from '../header/title'
import Navigator from '../nav/navigator'
import Spinner from '../spinner/Spinner'
import './Playlist.sass'

export default function Playlist(props) {

    const [playlists, setPlaylists] = useState([])
    const [title, setTitle] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const location = useLocation()   

    const getPlaylists = async (id, token) => {
        const response =  await playLists(id, token)
        setPlaylists(response.data.playlists.items)
        setIsLoading(false)
    }
    
    useEffect(() => {
        if (props.match === undefined) return
        getPlaylists(props.match.params.id, props.token)
        setTitle(location.state)
    }, [props.match, props.token, location])

    return (
        <>
        <div className="navigation-container">
            <Title title='Playlists para: ' name={title}/>
            <Navigator />
        </div>        
        <div className="playlists-container">
            {isLoading && <Spinner />}
            
            {playlists.length > 0 && playlists.map(playlist => {
                return <Link 
                            className="playlist-item"
                            to={{
                                pathname: '/tracks/' + playlist.id,
                                name: playlist.name
                            }}
                            key={playlist.id}
                        >
                            <img className="playlist-img" alt={playlist.name} src={playlist.images[0].url}/>
                            <div className="playlist-name">{playlist.name}</div>
                            <div className="playlist-text">{playlist.description}</div>                                                        
                        </Link>
            })}
            <div className="fade"></div>
        </div>
        </>
    )
}
