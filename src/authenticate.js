import React, { useState, useEffect } from 'react'
import token from './api/request'
import App from './App.jsx'
import Header from './components/header/header'
import './authenticate.sass'

export default function Authenticate() {


    const [access_token, setAccess_token] = useState('')


    const getToken = async () => {
        const response = await token()
  
        setAccess_token(response)
    }


    useEffect(() => {
        getToken()
      }, [])

    return (

        <div className="App">
            <div className="content">
                <Header /> 
                <App token={access_token}/>
            </div>
        </div> 
           
    )
}
