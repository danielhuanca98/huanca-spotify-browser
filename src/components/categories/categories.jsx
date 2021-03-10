import React from 'react'
import './categories.sass'
import { Link } from 'react-router-dom'
import Title from '../header/title'
import Spinner from '../spinner/Spinner'


function Categories(props) {    

    return (
        <>
            <Title title="Principais categorias"/>
            <div className="categories-list">
                {props.isLoading && <Spinner />}
                {props.array.length > 0 && props.array.map(categorie => {
                    return (
                        <Link 
                            to={{
                                pathname: '/playlists/' + categorie.id,
                                state: categorie.name
                            }}
                            className="categorie-item" 
                            key={categorie.id}                        
                        >
                            <img className="categorie-img" alt={categorie.name} src={categorie.icons[0].url}/>
                            <div className="categorie-label">{categorie.name}</div>
                        </Link>
                    )
                })}
                
            </div>
        </>
    )
}

export default Categories
