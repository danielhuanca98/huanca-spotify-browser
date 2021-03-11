import React,  { useContext, useEffect, useState } from 'react'
import './categories.sass'
import { categories } from "../../api/request";
import { Link } from 'react-router-dom'
import Title from '../header/title'
import Spinner from '../spinner/Spinner'
import { TokenContext } from '../../TokenProvider'


function Categories() {
    
    const [categoriesArray, setCategoriesArray] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const token = useContext(TokenContext);
    console.log(token)
    
    useEffect(() => {
        if (token === "") return
        categories(token).then((res) => {
            setCategoriesArray(res.data.categories.items)
            setIsLoading(false)
        })
    }, [token])

    return (
        <>
            <Title title="Principais categorias"/>
            <div className="categories-list">
                {isLoading && <Spinner />}
                {categoriesArray.length > 0 && categoriesArray.map(categorie => {
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
